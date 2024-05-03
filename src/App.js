import logo from './logo.svg';
import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from './pages/home';
import Dashboard from'./dashboard/dashboard';
import Aboutus from './pages/aboutus';
import Privacy from './pages/privacy';
import Download from './pages/howtodownload';
import Accessdenied from './pages/access_denied';
import Becomeacreator from './pages/become_a_creator_page';
import  Forbrand from './pages/for-brands';
import  Legalterms from './pages/legal_terms_of_services';
import  Licenseterms from './pages/license_term';
import Pricingpage from './pages/pricing_page';
import Signin from './dashboard/sign_in_page';
import Signup from './dashboard/sign_up_page';
import Singleservices from './pages/single_service_page';
import Upload from './dashboard/upload';
import Allcontent from './dashboard/allcontent';
import Thank from './dashboard/thank';
import axios from 'axios';
import Singleview from './dashboard/singleview';
import Favourite from './dashboard/favourite';
import { motion } from "framer-motion";
import Main from './pages/main';
import Checkvid from './dashboard/upvid';
import { googleLogout } from '@react-oauth/google';
import Userview from './dashboard/userview';

function App() {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  useEffect(() => {
    // console.log(user)
  },[])
  const login = (userData) => {
    // console.log(userData)
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    if(user.google !== undefined ){
      googleLogout()
    }
    setUser(null);
    localStorage.removeItem('user');
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Landing Pages */}
          <Route path="/" element={<Main user={user} logout={logout} />} >
            <Route index element={ <Home user={user} /> } />
            <Route path="/about-us" element={<Aboutus user={user} />} />
            <Route path="/privacy-policy" element={<Privacy user={user} />} />
            <Route path="/how-to-download" element={<Download user={user} />} />
            <Route path="/access-denied" element={<Accessdenied user={user} />} />
            <Route path="/become-a-creator" element={<Becomeacreator user={user} />} />
            <Route path="/for-brands" element={<Forbrand user={user} />} />
            <Route path="/legal-terms" element={<Legalterms user={user} />} />
            <Route path="/license-terms" element={<Licenseterms user={user} />} />
            <Route path="/pricing-page" element={<Pricingpage user={user} />} />
            <Route path="/single-services" element={<Singleservices user={user} />} />
            <Route path="*" element={<Accessdenied user={user} />} />
            <Route path="thank-you" element={<Thank user={user} login={login} />} />
            <Route path="single-view" element={<Singleview />} />
          </Route>
          {/* <Route path="/privacy-policy" element={<Privacy user={user} />} />
          <Route path="/how-to-download" element={<Download user={user} />} />
          <Route path="/access-denied" element={<Accessdenied user={user} />} />
          <Route path="/become-a-creator" element={<Becomeacreator user={user} />} />
          <Route path="/for-brands" element={<Forbrand user={user} />} />
          <Route path="/legal-terms" element={<Legalterms user={user} />} />
          <Route path="/license-terms" element={<Licenseterms user={user} />} />
          <Route path="/pricing-page" element={<Pricingpage user={user} />} />
          <Route path="/single-services" element={<Singleservices user={user} />} />
          <Route path="*" element={<Accessdenied user={user} />} />
          <Route path="thank-you" element={<Thank user={user} login={login} />} />
          <Route path="single-view" element={<Singleview />} /> */}
          {/* Dashboard Pages */}
          <Route path="dashboard" element={<Dashboard logout={logout} login={login} user={user} />} >
            <Route index element={ <Allcontent user={user} /> } />
            <Route path='saved' element={ <Favourite user={user} /> } />
            {/* <Route path="upload" element={ <Upload user={user} /> } /> */}
            <Route path="checkvid" element={ <Checkvid user={user} /> } />
          </Route>
          {/* Sign in Page */}
          {/* <Route path="sign-in" element={ <Signin login={login} />} />
          <Route path="sign-up" element={<Signup /> } /> */}
          
          <Route path="user-view" element={ <Userview /> } />
          <Route path="upload" element={ <Upload user={user} /> } />
          <Route path="sign-in" element={ user !== null ? <Navigate to='/dashboard' /> : <Signin login={login} />} />
          <Route path="sign-up" element={user !== null ? <Navigate to='/dashboard' /> : <Signup login={login} /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
