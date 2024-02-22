import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PulseLoader , ClipLoader } from 'react-spinners'

export default function Favourite({user}) {
  const redirect = useNavigate()
    const [allvideo, setallvideo] = useState([]);
    const [loader, setloader] = useState(true);
    const [saveloader, setsaveloader] = useState(false);
    const geturlvideo = async () => {
      try{
        let response = await axios.get(process.env.REACT_APP_SERVER_URL+"/video/"+user.UserID);
        if(response.data.error){
          setallvideo([])
        }else{
          setallvideo(response.data.favourite)
        }
      } catch(err){
        setallvideo([])
      }
      setloader(false)
    }
  
    useEffect(() => {
          geturlvideo()
    }, []);

    const handleview = (id) => {
      redirect('/single-view?id='+id)
    }
  return (
    <div>
          <div className="tab-content" id="pills-tabContent">
            {
              loader ?
          <PulseLoader color="#fd9d6bbf" cssOverride={{textAlign:'center'}} loading={loader} size="50" />
          :
          <div className="tab-pane fade show active" id="pills-modest" role="tabpanel" aria-labelledby="pills-modest-tab" tabIndex="0">
            {
              allvideo.map((values,key) => {
                return(
                  <div key={key} className="v-box">
                    <img className="video_thumb" src={values.imageurl} ></img>
                      <div className="hover-buttons">
                        <button onClick={() => handleview(values.ContentID)} className="hb-2">View</button>
                      </div>
                  </div>
                )
              })
            }
            </div>
            }
          </div>
    </div>
  )
}
