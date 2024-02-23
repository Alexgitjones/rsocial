import React, {useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Header({user}) {
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
                <div className="row w-100 desktop-header">
                    <div className="col-3 text-start header-block-1">
                        <Link className="logo" to="/">
                            <img src="/assets/images/home/f-logo.png" alt="UGC Stocks" />
                        </Link>
                    </div>
                    <div className="col-6 text-center menu-list header-block-2" id="navbarSupportedContent">
                        <ul className="menu-list-c">
                            <li className="menu-item">
                                <Link className="menu-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="menu-item">
                                <Link className="menu-link" to="/about-us">About Us</Link>
                            </li>
                            <li className="menu-item">
                                <Link className="menu-link" to="/single-services">Our Services</Link>
                            </li>
                            <li className="menu-item">
                                <Link className="menu-link" to="/pricing-page">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 header-block-3">
                        {
                            user == null ?
                                <>
                                    <Link to="/sign-up">
                                    <button className="su-btn">Sign up</button>
                                    </Link>
                                    <Link to="/sign-in">
                                        <button className="si-btn">Sign in</button>
                                    </Link>
                                </>
                            :
                            <Link to="/dashboard">
                                <button className="si-btn">Dashboard</button>
                            </Link>
                        }
                        
                    </div>
                </div>
                <div class="row w-100 mobile_header">
                <div class="col-lg-3 col-6 header-block-1 justify-content-start d-flex align-items-center">
                    <Link class="logo" to="/">
                        <img src="./assets/images/home/f-logo.png" alt="UGC Stocks"/>
                    </Link>
                </div>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page"  to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/about-us">About Us</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/single-services">Our Services</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/pricing-page">Pricing</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/sign-up">Sign Up</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/sign-in">Sign In</Link>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
        </nav>
    </div>
  )
}
