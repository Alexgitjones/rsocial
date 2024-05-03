import React, {useState, useEffect, memo} from 'react'
import axios from 'axios';
import { useLocation, useNavigate, redirect, Link } from 'react-router-dom';
import { PulseLoader , ClipLoader } from 'react-spinners';
import { motion } from "framer-motion";

export default memo(function Allcontent({user}) {
  // console.log(user)


  const [alltag, setalltag] = useState([]);
  const [tagword, settagword] = useState([]);
  const [allvideo, setallvideo] = useState([]);
  const [savedvideo, setsavedvideo] = useState([]);
  const [pagination, setpagination] = useState(1);
  const [loader, setloader] = useState(true);
  const [btnloader, setbtnloader] = useState(false);
  const [saveloader, setsaveloader] = useState(false);
  const [search, setsearch] = useState(null);

  const navigate = useNavigate()
  
  const geturlvideo = async (check) => {
    try{
      let response = await axios.get(process.env.REACT_APP_SERVER_URL+"/video/"+user.UserID+"/"+pagination);
      if(response.error){
          setallvideo([])
          setalltag([])
          setsavedvideo([])
      }else{
        if(response.data.error){
          setallvideo([])
          setalltag([])
          setsavedvideo([])
        }else{
          setallvideo(response.data.video)
          setalltag(response.data.videotag)
          setsavedvideo(response.data.favourite.map((index) => { return index.ContentID }))
        }
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

  const handleScroll = (e) => {
      if(document.querySelector('.col-xxl-9') == null){
        return false;
      }
      var makescroll = document.documentElement.scrollTop + window.innerHeight + 2;
      if(makescroll > document.querySelector('.col-xxl-9').clientHeight){
        console.log(pagination)
        setpagination(pagination+1)
        window.removeEventListener('scroll', handleScroll);
      }
  };

  useEffect(() => {
        geturlvideo()
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
  },[]);

  useEffect(() => {
    if(tagword.length == 0){
      geturlvideo()
      window.addEventListener('scroll', handleScroll);
    }else{
      // console.log(pagination)
    }
},[pagination]);

  const handlesearch = () => {
    setbtnloader(true)
    if(search){
      axios.get(process.env.REACT_APP_SERVER_URL+'/filtertag/',{ params: [search]})
        .then(
        (response) =>{
          if(response.error){
            setallvideo([])
          }else{
            setallvideo(response.data.data)
          }
          setbtnloader(false)
        });
    }else{
      geturlvideo(true)
    }
  }

  useEffect(() => {
    if(tagword.length !== 0){
      axios.get(process.env.REACT_APP_SERVER_URL+'/filtertag/',{ params: tagword})
        .then(
        (response) =>{
          if(response.error){
            setallvideo([])
          }else{
            setallvideo(response.data.data)
          }
        }
      );
    }else{
      geturlvideo()
    }
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

const anim_item = {
  hidden: { opacity: 0},
  visible: (custom) => (
    {
      transition: { delay: 1 + custom * 0.2 },
      opacity: 1
    }
  )
};

const video_item = {
  hidden: { scale: 0},
  visible: (custom) => (
    {
      transition: { delay: 1 + custom * 0.15 , type: "spring" , ease: "linear" , bounce: 0.4 },
      scale: 1
    }
  )
};

  return (
    <div>
        <div className="input-group">
            <input onChange={(e) => setsearch(e.target.value)} type="search" className="form-control" placeholder="wellness" aria-label="Search" aria-describedby="search-addon" />
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
                <motion.li animate="visible" initial="hidden" custom={key}  variants={anim_item} key={key} className={tagword.includes(index) ? 'active nav-item' : 'nav-item'} role="presentation">
                  <button onClick={() => taghandler(index)} className="nav-link active" id="pills-modest-tab" data-bs-toggle="pill" data-bs-target="#pills-modest" type="button" role="tab" aria-controls="pills-modest" aria-selected="true">
                    {index}
                    {
                      tagword.includes(index) ?
                    <img className='ms-1' height={'12'} width={'12'} src="https://cdn-icons-png.flaticon.com/512/665/665939.png" />
                    : ''
                    }
                    </button>
                </motion.li>
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
                if(key > (pagination-1) * 12){
                  var makeanim = key - (pagination-1) * 12;
                  return(
                    <motion.div animate="visible" initial="hidden" custom={makeanim}  variants={video_item} key={key} className="v-box">
                      <img className="video_thumb" src={values.imagepath} ></img>
                      {/* <video playsInline="" loop muted="" autoPlay={true} data-wf-ignore={true} data-object-fit="cover" src={values.FilePath}></video> */}
                        <div className="hover-buttons">
                          {
                            savedvideo.includes(values.ContentID) ? '' :
                            <button onClick={() => saveview(values.ContentID,user.UserID)} className="hb-1">Save to favourite <ClipLoader loading={saveloader} size="15px" /></button>
                          }
                          <button onClick={() => handleview(values.ContentID)} className="hb-2">View</button>
                        </div>
                    </motion.div>
                  )
                }else{
                  return(
                    <motion.div initial="visible" custom={key}  variants={video_item} key={key} className="v-box">
                      <img className="video_thumb" src={values.imagepath} ></img>
                      {/* <video playsInline="" loop muted="" autoPlay={true} data-wf-ignore={true} data-object-fit="cover" src={values.FilePath}></video> */}
                        <div className="hover-buttons">
                          {
                            savedvideo.includes(values.ContentID) ? '' :
                            <button onClick={() => saveview(values.ContentID,user.UserID)} className="hb-1">Save to favourite <ClipLoader loading={saveloader} size="15px" /></button>
                          }
                          <button onClick={() => handleview(values.ContentID)} className="hb-2">View</button>
                        </div>
                    </motion.div>
                  )
                }
              })
            }
            </div>
          </div>
          </>
          }
          {
            tagword.length == 0 && search == '' && allvideo.length > 0 ?
          
          <div style={{textAlign:'center'}}>
            <ClipLoader loading={true} size="100px" />
          </div>
          : ''
          } 
    </div>
  )
});
