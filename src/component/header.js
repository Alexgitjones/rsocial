import React from 'react'

export default function Header() {
  return (
    <div>
        <div className="top-bar">
            <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                <div className="row w-100 text-center">
                    <div className="col tb-block-1">
                        <h1 className="top-bar-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor</h1>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar">
            <div className="container justify-content-between d-flex flex-column align-items-center">
                <div className="row w-100">
                    <div className="col-3 text-start header-block-1">
                        <a className="logo" href="./index.html">
                            <img src="./assets/images/home/f-logo.png" alt="UGC Stocks" />
                        </a>
                    </div>
                    <div className="col-6 text-center menu-list header-block-2" id="navbarSupportedContent">
                        <ul className="menu-list-c">
                            <li className="menu-item">
                                <a className="menu-link active" aria-current="page" href="./index.html">Home</a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-link" href="#">About Us</a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-link" href="#">Our Services</a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 header-block-3">
                        <a href="#">
                            <button className="su-btn">Sign up</button>
                        </a>
                        <a href="#">
                            <button className="si-btn">Sign in</button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
