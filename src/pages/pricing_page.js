import React , {useEffect, useState} from 'react'
import Textanimation from '../component/textanimation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Preloader from '../component/preloader';
import Imageanimation from '../component/imageanimation';
import { motion } from "framer-motion";

export default function Pricingpage({user}) {
    const navigate = useNavigate();

    const make_transaction = async (price) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL+'/maketransaction', {
            price,
          });
          window.location.href = response.data.url;
    }
    const handlepayment = (price) => {
        if(user == null){
            navigate('/sign-up?payment='+price)
        }else{
            make_transaction(price)
        }
    }
  return (
    <div>
        {/* <Preloader /> */}
        <div className="inner-pages-banner">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <div className="col ipb-block-1">
                    {/* <h1 className="hdng">Pricing</h1> */}
                    <Textanimation text="Pricing" />
                    <Imageanimation>
                    <h6 className="breadcrumbs">Home {'>>'} Pricing</h6>
                    </Imageanimation>
                </div>
            </div>
        </div>
    </div>


    <div className="p-container-pricing">
        <div className="container">

            <div className="select-plan-slider">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-center">
                        <Imageanimation>
                        <div className="col sps-block-1">
                            <h6 className="sub-hdng">SELECT A PLAN TO START DOWNLOAD</h6>
                            {/* <h1 className="hdng">Why is there a member limit?</h1> */}
                            <Textanimation text="Why is there a member limit?" />
                            <p className="decs">We put a limit on our membership to keep our videos exclusive – giving you a<br /> unique edge over others
                            </p>             
                        </div>
                        </Imageanimation>
                    </div>
                    <div className="row w-100 text-center">
                    <Imageanimation>
                        <div className="col sps-block-2">
                            <h6 className="sub-hdng">SELECT A PLAN TO START DOWNLOAD</h6>
                            {/* <h1 className="hdng">Does it work?</h1> */}
                            <Textanimation text="Does it work?" />
                            <p className="decs">We have the receipts! See our members reach millions under the ‘results’ story<br /> highlights on our Instagram 😍</p>
                        </div>
                    </Imageanimation>
                    </div>
                    <div className="row w-100 text-center">
                        <Imageanimation>
                        <div className="col sps-block-1">
                            <h6 className="sub-hdng">SELECT A PLAN TO START DOWNLOAD</h6>
                            {/* <h1 className="hdng">Not quite sure what to expect?</h1> */}
                            <Textanimation text="Not quite sure what to expect?" />
                            <p className="decs">We create the latest aesthetic lifestyle videos for females, males and brands - head over to our IG to see our<br /> videos in use. Sign up now to start creating more content without filming them yourself 🪄
                            </p>
                        </div>
                        </Imageanimation>
                    </div>
                </div>
            </div>

            <div className="pricing_plans">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 gap-4">
                        <motion.div transition={{delay:0.4 , duration:1, type: "spring", ease: "circIn" , bounce: 0.4 }} initial={{ y:100, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} className="col-xxl-4 col-xl-4 col-lg-4 col-12">
                            <div className="monthly">
                                <h6 className="sub-hdng">QUARTERLY
</h6>

                                <div className="price-div">
                                    <h1 className="price">$ 120 <span className="usd-text">USD</span></h1>
                                    <p className="price-decs">EVERY 3 MONTHS</p>
                                </div>
                                <hr className="divider" />
                                <div className="benefits-details">
                                    <ul>
                                        <li>Unlimited Downloads and Access to a growing content bank (100-200 new trendy videos added every month)</li>
                                        <li>Use Social Stocks videos and to show off your products or services, for both personal and business use. Remember, reselling the videos on their own is prohibited and illegal.
                                        </li>
                                        {/* <li>5 daily downloads</li>
                                        <li>5 daily downloads</li>
                                        <li>5 daily downloads</li> */}
                                    </ul>
                                </div>
                                <div className="btn-container">
                                    <a><button onClick={() => handlepayment('price_1Oor2eA8UKojBEm6j0F3aNqT')} className="select-btn">Join Now </button></a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div transition={{delay:0.6 , duration:1, type: "spring", ease: "circIn" , bounce: 0.4 }} initial={{ y:100, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} className="col-xxl-4 col-xl-4 col-lg-4 col-12">
                            <div className="monthly">
                                <h6 className="sub-hdng">YEARLY</h6>

                                <div className="price-div">
                                    <h1 className="price">$ 462 <span className="usd-text">USD</span></h1>
                                    <p className="price-decs">SAVE 42 USD
</p>
                                </div>
                                <hr className="divider" />
                                <div className="benefits-details">
                                    <ul>
                                        <li>Unlimited Downloads and Access to a growing content bank (100-200 new trendy videos added every month)</li>
                                        <li>Use Social Stocks videos and images to show off your products or services, for both personal and business use. Remember, reselling the videos on their own is prohibited and illegal.</li>
                                        <li>Access to an Additional Exclusive Videos and Images Folder<br/>Limited Number of Members<br/>0 Seats left</li>
                                        {/* <li>5 daily downloads</li>
                                        <li>5 daily downloads</li> */}
                                    </ul>
                                </div>
                                <div className="btn-container">
                                    <a><button onClick={() => handlepayment('price_1Oor33A8UKojBEm6E1L1kDED')} className="select-btn">MEMBER LIMIT REACHED</button></a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div transition={{delay:0.8 , duration:1, type: "spring", ease: "circIn" , bounce: 0.4 }} initial={{ y:100, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} className="col-xxl-4 col-xl-4 col-lg-4 col-12">
                            <div className="monthly">
                                <h6 className="sub-hdng">YEARLY</h6>

                                <div className="price-div">
                                    <h1 className="price">$ 462 <span className="usd-text">USD</span></h1>
                                    <p className="price-decs">SAVE 42 USD</p>
                                </div>
                                <hr className="divider" />
                                <div className="benefits-details">
                                    <ul>
                                    <li>Unlimited Downloads and Access to a growing content bank (100-200 new trendy videos added every month)</li>
                                        <li>Use Social Stocks videos and images to show off your products or services, for both personal and business use. Remember, reselling the videos on their own is prohibited and illegal.</li>
                                        <li>Access to an Additional Exclusive Videos and Images Folder<br/>Limited Number of Members<br/>0 Seats left</li>
                                        {/* <li>5 daily downloads</li>
                                        <li>5 daily downloads</li> */}
                                    </ul>
                                </div>
                                <div className="btn-container">
                                    <a><button onClick={() => handlepayment('price_1Oor3QA8UKojBEm6H0deayAI')} className="select-btn">MEMBER LIMIT REACHED</button></a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
