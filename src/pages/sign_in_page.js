import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'

export default function Signin() {
  return (
    <div>
        <Header />
        
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
                    <div className="row w-100 text-center">
                        <div className="col fb-block-1">
                            <a href="#"><button className="google-login-btn">
                                <img src="./assets/images/sign_in_page/google-logo.svg" alt="Google Logo"/> 
                                Continue with Google</button></a>
                        </div>
                    </div>
                    <div className="row w-100 ">
                        <div className="col fb-block-2">
                            <form>
                                <div className="mb-3">
                                  <label for="InputEmail1" className="form-label">Email</label>
                                  <input type="email" className="form-control" id="InputEmail1" placeholder="Email Address" required />
                                </div>
                                <div className="mb-3">
                                  <label for="InputPassword" className="form-label">Password</label>
                                  <input type="password" className="form-control" id="InputPassword" placeholder="Password" required />
                                </div>
                                <button type="submit" className="btn">Let’s get Started</button>
                              </form>
                              <div className="su-fp-btns">
                                <a href="#"><h6 className="sign-up-btn">Need an account? Sign up</h6></a>
                                <a href="#"><h6 className="fp-btn">Forgot password</h6></a>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="divider" />
        </div>
    </div>


        <Footer />
    </div>
  )
}
