import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'

export default function Accessdenied({user}) {
  return (
    <div>
        <Header user={user} />
        <div className="p-container-access_denied">
        <div className="container justify-content-center d-flex flex-column align-items-center">

            <div className="access_denied_box">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 d-flex justify-content-between text-center">
                        <div className="col adb-block-1">
                            <h1 className="hdng">Access Denied</h1>
                            <p className="decs">A site membership is required to view this page. You can select a payment plan via the link below</p>
                            <a href="#"><button className="select-plan">SELECT PLAN TO GET STARTED</button></a>
                            <h4 className="verify-email-hdng">Already a Member? Just verified your email?</h4>
                            <p className="decs"><a href="#">Sign In Here!</a></p>
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
        <Footer />
    </div>
  )
}
