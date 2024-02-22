import React, {useEffect} from 'react'
import { Routes, Route, Link, Outlet , useNavigate} from 'react-router-dom';
import Sidebar from '../component/dashsidebar';
import '../dashstyle.css';

export default function Dashboard({logout, user}) {
  const redirect = useNavigate();
  useEffect(() => {
    if(user){
      if(user.status == null){
        redirect('/pricing-page')
      }
    }else{
      redirect('/sign-in')
    }
  },[user])
  return (
    <>
    {
      user !== null ?
        <div className="side-bar">
          <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100">
              <Sidebar logout={logout} user={user} />
              <div className='col-xxl-9 sb-block-2'>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      : ''
    }
    </>
  )
}
