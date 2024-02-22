import React, {useState, useEffect, memo} from 'react'
import axios from 'axios';
import { useLocation, useNavigate, redirect, Link } from 'react-router-dom';
import { PulseLoader , ClipLoader } from 'react-spinners'

export default memo(function Allcontent({user}) {
  // console.log(user)
  const [alltag, setalltag] = useState([]);
  const [tagword, settagword] = useState([]);
  const [allvideo, setallvideo] = useState([]);
  const [savedvideo, setsavedvideo] = useState([]);
  const [loader, setloader] = useState(true);
  const [btnloader, setbtnloader] = useState(false);
  const [saveloader, setsaveloader] = useState(false);
  const [search, setsearch] = useState(null);

  const navigate = useNavigate()
  
  const geturlvideo = async (check) => {
    try{
      let response = await axios.get(process.env.REACT_APP_SERVER_URL+"/video/"+user.UserID);
      if(response.data.error){
        setallvideo([])
        setalltag([]) 
      }else{
        setallvideo(response.data.video)
        setalltag(response.data.videotag)
        setsavedvideo(response.data.favourite.map((index) => { return index.ContentID }))
      }
    } catch(err){
      setallvideo([])
      setalltag([])
    }
    setloader(false)
    if(check){
      setbtnloader(false)
    }
  }


  useEffect(() => {
        geturlvideo()
  },[]);

  const handlesearch = () => {
    setbtnloader(true)
    if(search){
      axios.get(process.env.REACT_APP_SERVER_URL+'/filtertag',{ params: [search]})
        .then(
        (response) =>{
          setallvideo(response.data.data)
          setbtnloader(false)
        });
    }else{
      geturlvideo(true)
    }
  }

  useEffect(() => {
    axios.get(process.env.REACT_APP_SERVER_URL+'/filtertag',{ params: tagword})
      .then(
      response => setallvideo(response.data.data)
    );
},[tagword]);


  const taghandler = (tag) => {
    if(tagword.filter((value) => value == tag).length == 0){
      settagword([...tagword,tag])
    }else{
      settagword(tagword.filter((value) => value !== tag))
    }
  }
const handleview = (id) => {
  navigate('/single-view?id='+id)
}

const saveview = async (contentid,userid) => {
  setsaveloader(true)
  let response = await axios.post(process.env.REACT_APP_SERVER_URL+"/savefav",{
    contentid:contentid,
    userid:userid
  });
  setsaveloader(false)
  geturlvideo()
}
  return (
    <div>
        <div className="input-group">
            <input onChange={(e) => setsearch(e.target.value)} type="search" className="form-control" placeholder="ready to post videos for your socials!" aria-label="Search" aria-describedby="search-addon" />
            <button onClick={() => handlesearch()} type="button" className="btn" data-mdb-ripple-init=""> search <ClipLoader loading={btnloader} size="15px" /> </button>
        </div>
        {
          loader ?
        <PulseLoader color="#fd9d6bbf" cssOverride={{textAlign:'center'}} loading={loader} size="50px" /> :
        <>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          {
            alltag.map((index,key) => {
              // if(false){
              return(
                <li key={key} className={tagword.includes(index) ? 'active nav-item' : 'nav-item'} role="presentation">
                  <button onClick={() => taghandler(index)} className="nav-link active" id="pills-modest-tab" data-bs-toggle="pill" data-bs-target="#pills-modest" type="button" role="tab" aria-controls="pills-modest" aria-selected="true">
                    {index}
                    {
                      tagword.includes(index) ?
                    <img className='ms-1' height={'12'} width={'12'} src="https://cdn-icons-png.flaticon.com/512/665/665939.png" />
                    : ''
                    }
                    </button>
                </li>
              )
              // }
            })
          }
            {/* <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-modest-tab" data-bs-toggle="pill" data-bs-target="#pills-modest" type="button" role="tab" aria-controls="pills-modest" aria-selected="true">
                Modest
              </button>
            </li> */}
          </ul>
          <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-modest" role="tabpanel" aria-labelledby="pills-modest-tab" tabIndex="0">
          {
            allvideo.length == 0 && !loader ?
            <h1 className="nt-found">Not Found</h1> : ''
          }
            {
              allvideo.map((values,key) => {
                return(
                  <div key={key} className="v-box">
                    <img className="video_thumb" src={values.imagepath} ></img>
                    {/* <video playsInline="" loop muted="" autoPlay={true} data-wf-ignore={true} data-object-fit="cover" src={values.FilePath}></video> */}
                      <div className="hover-buttons">
                        {
                          savedvideo.includes(values.ContentID) ? '' :
                          <button onClick={() => saveview(values.ContentID,user.UserID)} className="hb-1">Save <ClipLoader loading={saveloader} size="15px" /></button>
                        }
                        <button onClick={() => handleview(values.ContentID)} className="hb-2">View</button>
                      </div>
                  </div>
                )
              })
            }
            </div>
          </div>
          </>
          }
    </div>
  )
});
