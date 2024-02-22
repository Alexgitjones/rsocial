import React, {useEffect, useState} from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import { useLocation, useNavigate, redirect } from 'react-router-dom';
import axios from 'axios';
import { PulseLoader , ClipLoader } from 'react-spinners'

export default function Singleview() {
    let {search} = useLocation();
    const [getid,setgetid] = useState(search.split('=')[1]);
    const [videourl,setvideourl] = useState(search.split('=')[1]);
    const [btnloader, setbtnloader] = useState(false);
    const getsingle_video = async (id) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL+'/getsinglevideo', {
            contentid:parseInt(id),
          });
          if(response.data.msg){
            setvideourl(response.data.msg.FilePath)
          }else{
            console.log(response.data)
          }
    }
    useEffect(() => {
        getsingle_video(getid)
    },[getid])

    const handledownload = (e) => {
        e.preventDefault()
        setbtnloader(true)
        const url = videourl ;
        fetch(url)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'video.mp4');
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            setbtnloader(false)
          })
          .catch(error => {
            console.error('Error downloading video:', error);
            setbtnloader(false)
          });
    }
  return (
    <div>
        {/* <Header user={user} /> */}
        <div className="p-container-access_denied">
        <div className="container justify-content-center d-flex flex-column align-items-center">

            <div className="access_denied_box">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 d-flex justify-content-between text-center">
                        <div className="col adb-block-1">
                            <h1 className="hdng">Video</h1>
                            <div className='parent_inner_single_view_video'>
                                <div className='inner_single_view_video'>
                                    <video playsInline="" loop muted="" autoPlay={true} data-wf-ignore={true} data-object-fit="cover" src={videourl}></video>
                                </div>
                            </div>
                            <a href="http://res.cloudinary.com/du73if3k3/video/upload/v1707532364/lb3vqglp8jvurnfgajo8.mp4" download >
                                <button onClick={(e) => handledownload(e)} className="select-plan">Download <ClipLoader loading={btnloader} size="15px" /> </button>
                            </a>
                            {/* <h4 className="verify-email-hdng">Already a Member? Just verified your email?</h4>
                            <p className="decs"><a href="#">Sign In Here!</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="divider-pp">
        <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100">
                <div className="col">
                    <hr className="divider" />
                </div>
            </div>
        </div>
    </div>
        {/* <Footer /> */}
    </div>
  )
}
