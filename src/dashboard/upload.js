import React, { useState, useEffect } from 'react';
import Header from '../component/header'
import Footer from '../component/footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Upload({user}) {
    const navigate = useNavigate();
    useEffect(() => {
        if(user == null){
            navigate('/sign-in')
        }else{
            setUserID(user.UserID)
        }
    }, [user]);

    const [file, setFile] = useState(null);
    const [userID, setUserID] = useState('');
    const [fileType, setFileType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!file) {
          setErrorMessage('Please select a file');
          return;
        }
    
        const formData = new FormData();
        formData.append('file', file);
        formData.append('userID', userID);
        formData.append('fileType', fileType);
        formData.append('title', title);
        formData.append('description', description);
        const response = await axios.post(process.env.REACT_APP_SERVER_URL+'/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if(response.data.error){
            setErrorMessage(response.data.error);
        }else{
            setSuccessMessage(response.data.msg);
            setErrorMessage('');
            setFileType('')
            setTitle('')
            setDescription('')
            setFile('')
        }
      };
  return (
    <div>
    <div className="inner-pages-banner">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <div className="col ipb-block-1">
                    <h1 className="hdng">Welcome back<span>!</span></h1>
                    <h6 className="breadcrumbs">Login to see the Dashboard</h6>
                </div>
            </div>
        </div>
    </div>

    <div className="p-container-sign_in">
        <div className="container">
            <div className="form-box">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 ">
                        <div className="col fb-block-2">
                            <form onSubmit={handleSubmit}>
                                <input className='form-control' type="hidden" value={userID} required />
                                <div className='mb-3'>
                                    <label className='form-label'>File Type:</label>
                                    <select className='form-select' aria-label="Default select example" onChange={(e) => setFileType(e.target.value)} required >
                                        <option value='' >Select File Type</option>
                                        <option value='image' >Image</option>
                                        <option value='video' >Video</option>
                                    </select>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Title:</label>
                                    <input className='form-control' placeholder='Add Title' type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Add Tags:</label>
                                    <input className='form-control' placeholder='Add Tags here and Seperate with Comma ,' type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Upload File:</label>
                                    <input className='form-control' type="file" onChange={handleFileChange} required />
                                </div>
                                {errorMessage && <div className="alert alert-danger" >{errorMessage}</div>}
                                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                                <button className='btn' type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="divider" />
        </div>
    </div>
    </div>
  )
}
