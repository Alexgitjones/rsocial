import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'

export default function Signup() {
  return (
    <div>
        <Header />
        
    <div className="inner-pages-banner">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <div className="col ipb-block-1">
                    <h1 className="hdng">UGC Stocks</h1>
                    <h6 className="breadcrumbs">UGC Stocks Affiliates</h6>
                </div>
            </div>
        </div>
    </div>






    <div className="p-container-sign_up">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="sign-up-form-box">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-center">
                        <div className="col su-fb-block-1">
                            <div className="decs-box">
                                <p className="decs">Earn $10 for every customer you refer to www.Ugcff.co  😍</p>
                                <p className="decs">Your earnings will be paid out to you via bank transfer when you've reached 10 referrals or a total of $100</p>
                                <p className="decs">Fill out the form below to get started right away 👇</p>
                            </div>
                            <hr className="divider" />

                            <form className="text-start">
                                <div className="mb-3">
                                    <label for="InputFirstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="InputFirstName" placeholder="Luke" required />
                                  </div>
                                  <div className="mb-3">
                                    <label for="InputLastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="InputLastName" placeholder="Sky Walker" required />
                                  </div>
                                <div className="mb-3">
                                  <label for="InputEmail" className="form-label">Email Address</label>
                                  <input type="email" className="form-control" id="InputEmail" placeholder="LUHE@JEDI.COM" required />
                                </div>
                                <div className="mb-3">
                                    <div>
                                        <label for="InputPassword" className="form-label">Password</label>
                                        <p className="pass-text">Minimum 8 characters, ideally more.</p>
                                    </div>
                                  <input type="password" className="form-control" id="InputPassword" placeholder="HUNTER2" required />
                                </div>
                                <div className="mb-3">
                                    <label for="InputConfirmPassword" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="InputConfirmPassword" placeholder="HUNTER2" required />
                                  </div>
                                <button type="submit" className="suf-btn">sign up</button>
                              </form>

                        </div>
                    </div>
                </div>
            </div>

            <div className="sign-up-text">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row">
                        <div className="col su-fb-block-2">
                            <p>Already have an account? <a href="#">Login</a></p>
                            <p>Social Stocks Affiliates is powered by <a href="#">Rewardful</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <Footer />
    </div>
  )
}
