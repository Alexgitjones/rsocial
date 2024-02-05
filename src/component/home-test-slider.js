import React from 'react'
import Slider from "react-slick";

export default function Home_test_slider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true
      };
      const sliderarray = [1,2,3,4,5,6]
  return (
    <div className='container'>
        <Slider {...settings}>
            {
                sliderarray.map((key,index) => {
                    return(  
            <div key={key} className="t-box">
                <div className="p-details">
                    <img className="p-img" src="/assets/images/home/sh-img.png" alt="Shawmell Johnson" />
                    <div className="pd-box text-start">
                        <h1 className="p-name">Shawmell Johnson</h1>
                        <h6 className="t-time">7 months ago</h6>
                    </div>
                </div>
                <div className="r-stars text-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"
                        viewBox="0 0 21 20" fill="none">
                        <path
                            d="M10.4509 16.3164L15.2926 19.2447C16.1792 19.7814 17.2642 18.988 17.0309 17.9847L15.7476 12.478L20.0292 8.76802C20.8109 8.09136 20.3909 6.80802 19.3642 6.72636L13.7292 6.24802L11.5242 1.04469C11.1276 0.0996875 9.77422 0.0996875 9.37756 1.04469L7.17256 6.23635L1.53756 6.71469C0.510891 6.79635 0.0908903 8.07969 0.872557 8.75636L5.15422 12.4664L3.87089 17.973C3.63756 18.9764 4.72256 19.7697 5.60922 19.233L10.4509 16.3164Z"
                            fill="#FF9245" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"
                        viewBox="0 0 21 20" fill="none">
                        <path
                            d="M10.4509 16.3164L15.2926 19.2447C16.1792 19.7814 17.2642 18.988 17.0309 17.9847L15.7476 12.478L20.0292 8.76802C20.8109 8.09136 20.3909 6.80802 19.3642 6.72636L13.7292 6.24802L11.5242 1.04469C11.1276 0.0996875 9.77422 0.0996875 9.37756 1.04469L7.17256 6.23635L1.53756 6.71469C0.510891 6.79635 0.0908903 8.07969 0.872557 8.75636L5.15422 12.4664L3.87089 17.973C3.63756 18.9764 4.72256 19.7697 5.60922 19.233L10.4509 16.3164Z"
                            fill="#FF9245" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"
                        viewBox="0 0 21 20" fill="none">
                        <path
                            d="M10.4509 16.3164L15.2926 19.2447C16.1792 19.7814 17.2642 18.988 17.0309 17.9847L15.7476 12.478L20.0292 8.76802C20.8109 8.09136 20.3909 6.80802 19.3642 6.72636L13.7292 6.24802L11.5242 1.04469C11.1276 0.0996875 9.77422 0.0996875 9.37756 1.04469L7.17256 6.23635L1.53756 6.71469C0.510891 6.79635 0.0908903 8.07969 0.872557 8.75636L5.15422 12.4664L3.87089 17.973C3.63756 18.9764 4.72256 19.7697 5.60922 19.233L10.4509 16.3164Z"
                            fill="#FF9245" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"
                        viewBox="0 0 21 20" fill="none">
                        <path
                            d="M10.4509 16.3164L15.2926 19.2447C16.1792 19.7814 17.2642 18.988 17.0309 17.9847L15.7476 12.478L20.0292 8.76802C20.8109 8.09136 20.3909 6.80802 19.3642 6.72636L13.7292 6.24802L11.5242 1.04469C11.1276 0.0996875 9.77422 0.0996875 9.37756 1.04469L7.17256 6.23635L1.53756 6.71469C0.510891 6.79635 0.0908903 8.07969 0.872557 8.75636L5.15422 12.4664L3.87089 17.973C3.63756 18.9764 4.72256 19.7697 5.60922 19.233L10.4509 16.3164Z"
                            fill="#FF9245" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"
                        viewBox="0 0 21 20" fill="none">
                        <path
                            d="M10.4509 16.3164L15.2926 19.2447C16.1792 19.7814 17.2642 18.988 17.0309 17.9847L15.7476 12.478L20.0292 8.76802C20.8109 8.09136 20.3909 6.80802 19.3642 6.72636L13.7292 6.24802L11.5242 1.04469C11.1276 0.0996875 9.77422 0.0996875 9.37756 1.04469L7.17256 6.23635L1.53756 6.71469C0.510891 6.79635 0.0908903 8.07969 0.872557 8.75636L5.15422 12.4664L3.87089 17.973C3.63756 18.9764 4.72256 19.7697 5.60922 19.233L10.4509 16.3164Z"
                            fill="#FF9245" />
                    </svg>
                </div>
                <p className="decs text-start">Lorem ipsum dolor amet, constetur adipiscing elit, sed do
                    eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud
                    exercitation.</p>
            </div>
                )
                })
            }
        </Slider>
    </div>
  )
}
