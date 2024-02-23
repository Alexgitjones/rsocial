import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'

export default function Singleservices({user}) {
  return (
    <div>
        <Header user={user} />
        <div className="inner-pages-banner">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <div className="col ipb-block-1">
                    <h1 className="hdng">Services NAme Here</h1>
                    <h6 className="breadcrumbs">Home {'>>'} Our Services {'>>'} Service Name Here</h6>
                </div>
            </div>
        </div>
    </div>


    <div className="p-container-ssp">
        <div className="container">

            <div className="service-content">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-start d-flex justify-content-between ">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 sc-block-1 align-self-center">
                            <h6 className="st">Service Name</h6>
                            <h1 className="hdng">Service Name Here</h1>
                            <p className="decs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 text-end sc-block-2">
                            <img src="./assets/images/single_service_page/sn-img.png" alt="Save-Time" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div className="join-now">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <div className="col jn-block-1">
                    <h6 className="sub-hdng">Join Now</h6>
                    <h1 className="hdng">Sign up today and see the difference trendy UGC style content can make for your
                        social media presence</h1>
                    <a href="#"><button className="sujn-btn">Sign Up</button></a>
                </div>
            </div>
        </div>
    </div>


        <Footer />
    </div>
  )
}
