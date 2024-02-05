import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="ugc-footer">
            <div className="container justify-content-center d-flex flex-column align-items-center">
                <div className="row w-100 f-row-1">
                    <div className="col-4 r1-block-1">
                        <img src="/assets/images/home/f-logo.png" alt="footer-logo" className="footer-logo" />
                        <a href="mailto:HELLO@Ugcfile.CO"><button  className="email">HELLO@Ugcfile.CO</button></a>
                    </div>

                    <div className="col-2 r2-block-2">
                        <h1 className="hdng">COMPANY</h1>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="col-2 r3-block-3">
                        <h1 className="hdng">ACCOUNT</h1>
                        <ul>
                            <li><a href="#">Account Settings</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Sign Up</a></li>
                        </ul>
                    </div>

                    <div className="col-2 r4-block-4">
                        <h1 className="hdng">MORE</h1>
                        <ul>
                            <li><a href="#">Become an Affiliate</a></li>
                            <li><a href="#">Become a Creator</a></li>
                            <li><a href="#">Custom Brand Videos</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row w-100 f-row-2">
                    <div className="col">
                        <hr className="divider" />
                    </div>
                </div>

                <div className="row w-100 f-row-3">
                    <div className="col-6 r3-block-1">
                        <h6 className="hdng">© Ugc file 2024</h6>
                    </div>
                    <div className="col-6 r3-block-2 text-end">
                        <ul>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Licence terms</a></li>
                            <li><a href="#">Terms of service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
