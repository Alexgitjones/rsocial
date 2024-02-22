import React , {useEffect, useState} from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import Home_test_slider from '../component/home-test-slider'
import { useNavigate } from 'react-router-dom';

export default function Home({user}) {
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const navigate = useNavigate();
    useEffect(() => {
        // console.log(user)
    },[user])

    const searchhandle = () => {
        if(user == null){
            navigate('/pricing-page')
        }else{
            navigate('/dashboard')
        }
    }

  return (
    <div>
      <Header user={user} />
      <div className="banner">
        <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
            <div className="row text-center w-100">
                <div className="col b-block-1">
                    <img src="./assets/images/home/banner-logo.png" alt="UGC Stocks" className="b-logo" />
                    <p className="decs">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className="row text-center w-100">
                <div className="col b-block-2">
                    <div className="input-group">
                        <input type="search" className="form-control" placeholder="ready to post videos for your socials!"
                            aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" onClick={() => searchhandle()} className="btn" data-mdb-ripple-init>search</button>
                    </div>
                </div>
            </div>
            <div className="row text-center w-100">
                    {/* <div className="col b-block-3"> */}
                    <div className="videos-p col">
                    <div className="row-1 img-d">
                        <div className="v-box">
                            <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/65c342175f5e330084c95c24_content%20creator%20copy_AE435787-457C-4402-8805-7589E32BB6EB-transcode.mp4"></video>
                            </div>
                            <div className="v-box">
                                <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/65c2ee310da86da1f768af38_Modest%20working%20entrepeneur%20candle%20coffeeIMG_2915-transcode.mp4"></video>
                            </div>
                            <div className="v-box">
                                <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/65ae212261f1856f54cf4dc4_Copy%20of%20IMG_8150-transcode.mp4"></video>
                            </div>
                        </div>
                        <div className="row-2 img-d">
                            <div className="v-box">
                                <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/65adff1512fb43a9a31a8d11_1705318411402290-transcode.mp4"></video>
                            </div>
                            <div className="v-box">
                                <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/6595217fe3eee3cf0417a4e1_copy_BB9FAF58-CD67-470A-9C3A-8AF0C3C3D146%20studio%20entrepeneur%20working%20business%20-transcode.mp4"></video>
                            </div>
                        </div>
                        <div className="row-3 img-d">
                            <div className="v-box">
                                <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/6581421f864d9b8b8268d0bf_IMG_3686%20coffee%20next%20to%20window%20-transcode.mp4"></video>
                            </div>
                            <div className="v-box">
                                <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/657c1a1e23ef04d5c7d06d17_IMG_5984-transcode.mp4"></video>
                            </div>
                        </div>
                        <div className="row-4 img-d">
                            <div className="v-box">
                                <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/655b5990b48482c90df989c4_IMG_7914-transcode.mp4"></video>
                            </div>
                        </div>
                        <div className="row-5 img-d">
                            <div className="v-box">
                                <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/65c342175f5e330084c95c24_content%20creator%20copy_AE435787-457C-4402-8805-7589E32BB6EB-transcode.mp4"></video>
                            </div>
                            <div className="v-box">
                                <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/65c342175f5e330084c95c24_content%20creator%20copy_AE435787-457C-4402-8805-7589E32BB6EB-transcode.mp4"></video>
                            </div>
                        </div>
                        <div className="row-6 img-d">
                            <div className="v-box">
                                <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/6581421f864d9b8b8268d0bf_IMG_3686%20coffee%20next%20to%20window%20-transcode.mp4"></video>
                            </div>
                            <div className="v-box">
                                <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/6595217fe3eee3cf0417a4e1_copy_BB9FAF58-CD67-470A-9C3A-8AF0C3C3D146%20studio%20entrepeneur%20working%20business%20-transcode.mp4"></video>
                            </div>
                        </div>
                        <div className="row-7 img-d">
                            <div className="v-box">
                                <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/657c1a1e23ef04d5c7d06d17_IMG_5984-transcode.mp4"></video>
                            </div>
                            <div className="v-box">
                                <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/65adff1512fb43a9a31a8d11_1705318411402290-transcode.mp4"></video>
                            </div>
                            <div className="v-box">
                                <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" src="https://assets-global.website-files.com/640f20513de5c81f88c44ee4/65c2ee310da86da1f768af38_Modest%20working%20entrepeneur%20candle%20coffeeIMG_2915-transcode.mp4"></video>
                            </div>
                        </div>
                        {/* <div className="row-1 img-d">
                            <img src="./assets/images/home/2.png" alt="1" />
                            <img src="./assets/images/home/1.png" alt="1" />
                            <img src="./assets/images/home/2-1.png" alt="1" />
                        </div>
                        <div className="row-2 img-d">
                            <img src="./assets/images/home/3.png" alt="1" />
                            <img src="./assets/images/home/4.png" alt="1" />
                        </div>
                        <div className="row-3 img-d">
                            <img src="./assets/images/home/5.png" alt="1" />
                            <img src="./assets/images/home/6.png" alt="1" />
                        </div>
                        <div className="row-4 img-d">
                            <img src="./assets/images/home/7.png" alt="1" />
                        </div>
                        <div className="row-5 img-d">
                            <img src="./assets/images/home/8.png" alt="1" />
                            <img src="./assets/images/home/9.png" alt="1" />
                        </div>
                        <div className="row-6 img-d">
                            <img src="./assets/images/home/10.png" alt="1" />
                            <img src="./assets/images/home/11.png" alt="1" />
                        </div>
                        <div className="row-7 img-d">
                            <img src="./assets/images/home/12.png" alt="1" />
                            <img src="./assets/images/home/13.png" alt="1" />
                            <img src="./assets/images/home/14.png" alt="1" />
                        </div> */}
                    </div>
            </div>
            {/* <div className="row text-center w-100">
                <div className="col b-block-3">
                    <img src="./assets/images/home/banner-img.png" alt="multi-images" className="multi-images /">
                    <a href="./index.html#second-section">
                        <img src="./assets/images/home/scroll-down.png" alt="scrolldown" className="scroll-down" />
                    </a>
                </div>
            </div> */}
            <div className="row text-center w-100">
                <div className="col b-block-4">
                    <h6 className="hiw">Here’s how it works</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <g clipPath="url(#clip0_48_73)">
                            <path
                                d="M6.26245 9.85379L0.592451 4.24879C0.152451 3.81879 0.152451 3.11379 0.592451 2.67879C1.03245 2.24379 1.74245 2.24379 2.18245 2.67879L6.26245 6.70879L10.3425 2.67879C10.7825 2.24379 11.4925 2.24379 11.9325 2.67879C12.3725 3.11379 12.3725 3.81879 11.9325 4.24879L6.26245 9.85379Z"
                                fill="#111111" />
                        </g>
                        <defs>
                            <clipPath id="clip0_48_73">
                                <rect width="12" height="12" fill="white" transform="translate(0.262451 0.104004)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </div>


    <div className="how-it-work" id="second-section">
        <div className="container">
            <div className="how-it-work-details">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-center">
                        <div className="col hitd-block-1">
                            <h1 className="hdng">HOW IT WORKS</h1>
                        </div>
                    </div>

                    <div className="row w-100 text-center">
                        <div className="col hitd-block-2">
                            <div className="step-boxs">
                                <div className="step-box-1">
                                    <div className="num">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="37"
                                            viewBox="0 0 47 37" fill="none">
                                            <path
                                                d="M16.1968 36.8129C9.24678 36.8129 0.696777 31.0629 0.696777 18.6629C0.696777 7.51289 8.59678 0.962891 16.0968 0.962891C23.0468 0.962891 31.5968 6.71289 31.5968 19.1129C31.5968 30.2629 23.6968 36.8129 16.1968 36.8129ZM5.84678 15.6629C5.84678 25.3629 10.4968 35.7629 18.2468 35.7629C23.3968 35.7629 26.4468 30.3629 26.4468 22.1629C26.4468 12.4129 21.8468 2.01289 14.0468 2.01289C8.94678 2.01289 5.84678 7.46289 5.84678 15.6629Z"
                                                fill="black" />
                                            <path
                                                d="M36.4706 36.3129V35.6129C38.4706 35.0629 38.8706 33.5629 38.8706 29.9629V6.11289L34.4706 7.96289L34.3706 7.61289L43.7706 1.06289H44.1706V29.9629C44.1706 33.5629 44.5706 35.0629 46.5706 35.6129V36.3129H36.4706Z"
                                                fill="black" />
                                        </svg>
                                    </div>
                                    <h1 className="hdng">Sign up</h1>
                                    <p className="decs">Select a subscription plan and gain access to our collection of
                                        royalty-free aesthetic stock videos and images</p>
                                    <svg className="s-arrow-1" xmlns="http://www.w3.org/2000/svg" width="76" height="76"
                                        viewBox="0 0 76 76" fill="none">
                                        <circle cx="37.6954" cy="37.6954" r="37.1954" fill="#FFC09F" stroke="black" />
                                        <circle cx="37.6955" cy="37.6957" r="23.2426" fill="white" />
                                        <circle cx="37.6955" cy="37.6957" r="22.7426" stroke="black"
                                            strokeOpacity="0.1" />
                                        <path
                                            d="M43.2899 37.6957L36.1426 44.4222L36.1426 44.4222L36.1418 44.423C35.6593 44.8823 34.8616 44.8834 34.3714 44.4222C33.8886 43.9678 33.8886 43.2407 34.3714 42.7864L34.3715 42.7863L39.6216 37.8413L39.7762 37.6957L39.6216 37.5502L34.3715 32.6052L34.3714 32.6051C33.8886 32.1508 33.8886 31.4236 34.3714 30.9693C34.8616 30.5081 35.6593 30.5092 36.1418 30.9685L36.1426 30.9693L43.2899 37.6957Z"
                                            fill="black" stroke="white" strokeWidth="0.4" />
                                    </svg>
                                </div>
                                <div className="step-box-2">
                                    <div className="num">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="37"
                                            viewBox="0 0 56 37" fill="none">
                                            <path
                                                d="M16.1858 36.8129C9.23579 36.8129 0.685791 31.0629 0.685791 18.6629C0.685791 7.51289 8.58579 0.962891 16.0858 0.962891C23.0358 0.962891 31.5858 6.71289 31.5858 19.1129C31.5858 30.2629 23.6858 36.8129 16.1858 36.8129ZM5.83579 15.6629C5.83579 25.3629 10.4858 35.7629 18.2358 35.7629C23.3858 35.7629 26.4358 30.3629 26.4358 22.1629C26.4358 12.4129 21.8358 2.01289 14.0358 2.01289C8.93579 2.01289 5.83579 7.46289 5.83579 15.6629Z"
                                                fill="black" />
                                            <path
                                                d="M31.8959 35.6129C38.7959 28.9629 48.1959 19.1129 48.1959 10.5629C48.1959 7.31289 46.646 4.16289 42.2459 4.16289C39.7959 4.16289 37.5459 5.11289 35.3959 7.46289L34.9459 7.01289C38.0459 3.11289 41.3459 0.962891 45.7959 0.962891C50.2459 0.962891 53.896 3.91289 53.9459 9.26289C53.9959 18.1129 42.9959 26.8129 36.6459 32.2629H47.6459C52.5959 32.2629 53.596 31.7629 54.4959 29.5129L55.0459 29.5629L54.2959 36.3129H31.8959V35.6129Z"
                                                fill="black" />
                                        </svg>
                                    </div>
                                    <h1 className="hdng">Download</h1>
                                    <p className="decs">Save the videos/images you want to use to your device and customize
                                        to your liking</p>
                                    <svg className="s-arrow-1" xmlns="http://www.w3.org/2000/svg" width="76" height="76"
                                        viewBox="0 0 76 76" fill="none">
                                        <circle cx="37.6954" cy="37.6954" r="37.1954" fill="#FFC09F" stroke="black" />
                                        <circle cx="37.6955" cy="37.6957" r="23.2426" fill="white" />
                                        <circle cx="37.6955" cy="37.6957" r="22.7426" stroke="black"
                                            strokeOpacity="0.1" />
                                        <path
                                            d="M43.2899 37.6957L36.1426 44.4222L36.1426 44.4222L36.1418 44.423C35.6593 44.8823 34.8616 44.8834 34.3714 44.4222C33.8886 43.9678 33.8886 43.2407 34.3714 42.7864L34.3715 42.7863L39.6216 37.8413L39.7762 37.6957L39.6216 37.5502L34.3715 32.6052L34.3714 32.6051C33.8886 32.1508 33.8886 31.4236 34.3714 30.9693C34.8616 30.5081 35.6593 30.5092 36.1418 30.9685L36.1426 30.9693L43.2899 37.6957Z"
                                            fill="black" stroke="white" strokeWidth="0.4" />
                                    </svg>
                                </div>
                                <div className="step-box-3">
                                    <div className="num">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="44"
                                            viewBox="0 0 54 44" fill="none">
                                            <path
                                                d="M16.2473 36.4633C9.29731 36.4633 0.747314 30.7133 0.747314 18.3133C0.747314 7.16328 8.64732 0.613281 16.1473 0.613281C23.0973 0.613281 31.6473 6.36328 31.6473 18.7633C31.6473 29.9133 23.7473 36.4633 16.2473 36.4633ZM5.89732 15.3133C5.89732 25.0133 10.5473 35.4133 18.2973 35.4133C23.4473 35.4133 26.4973 30.0133 26.4973 21.8133C26.4973 12.0633 21.8973 1.66328 14.0973 1.66328C8.99731 1.66328 5.89732 7.11328 5.89732 15.3133Z"
                                                fill="black" />
                                            <path
                                                d="M32.8575 42.4633C42.8075 37.3633 47.8075 28.8133 47.8075 23.3133C47.8075 17.8633 45.1575 16.2133 42.1075 16.2133C41.3575 16.2133 40.1575 16.4633 38.9575 17.1133L38.7075 16.5633C43.0575 14.4133 45.6575 11.8133 45.6575 8.11328C45.6575 5.36328 43.7075 3.71328 40.6075 3.71328C38.2575 3.71328 35.7075 4.76328 33.5575 7.11328L33.1075 6.66328C36.2075 2.96328 39.4075 0.613281 43.8575 0.613281C48.0075 0.613281 50.5075 3.36328 50.5075 6.36328C50.5075 10.8633 47.0575 13.2133 42.1575 15.5133C42.9075 15.3133 43.8575 15.1633 45.0075 15.1633C48.3575 15.1633 53.4575 16.8133 53.4575 22.4633C53.4575 30.8633 44.1075 37.3633 33.2075 43.1633L32.8575 42.4633Z"
                                                fill="black" />
                                        </svg>
                                    </div>
                                    <h1 className="hdng">
                                        Post

                                    </h1>
                                    <p className="decs">Share to yours or your client's social media and create even more
                                        posts in less time!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hit-info">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-center">
                        <div className="col hit-info-block-1">
                            <h1 className="hdng">VIDEOS & PHOTOS READY TO DOWNLOAD</h1>
                            <hr className="divider" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="56" viewBox="0 0 200 56"
                                fill="none">
                                <path
                                    d="M0 54.797C12.9797 48.1441 19.5021 36.9907 19.5021 29.816C19.5021 22.7066 16.0452 20.5541 12.0665 20.5541C11.0882 20.5541 9.52278 20.8803 7.95739 21.7282L7.63127 21.0107C13.3058 18.2061 16.6975 14.8144 16.6975 9.98777C16.6975 6.40043 14.1537 4.24802 10.1098 4.24802C7.04425 4.24802 3.7178 5.61773 0.913143 8.68329L0.326122 8.09627C4.37004 3.26965 8.54441 0.204102 14.3494 0.204102C19.763 0.204102 23.0243 3.79145 23.0243 7.70492C23.0243 13.5751 18.5238 16.6407 12.1318 19.641C13.1101 19.3801 14.3494 19.1844 15.8496 19.1844C20.2196 19.1844 26.8725 21.3368 26.8725 28.7072C26.8725 39.6649 14.6755 48.1441 0.456571 55.7102L0 54.797Z"
                                    fill="black" />
                                <path
                                    d="M51.6461 46.9701C42.5799 46.9701 31.4265 39.4693 31.4265 23.2936C31.4265 8.74851 41.732 0.204102 51.5156 0.204102C60.5818 0.204102 71.7352 7.70492 71.7352 23.8806C71.7352 38.4257 61.4298 46.9701 51.6461 46.9701ZM38.1446 19.3801C38.1446 32.0337 44.2105 45.6004 54.3203 45.6004C61.0384 45.6004 65.0171 38.5561 65.0171 27.8593C65.0171 15.1405 59.0165 1.57381 48.8414 1.57381C42.1885 1.57381 38.1446 8.68329 38.1446 19.3801Z"
                                    fill="black" />
                                <path
                                    d="M96.5516 46.9701C87.4854 46.9701 76.332 39.4693 76.332 23.2936C76.332 8.74851 86.6375 0.204102 96.4212 0.204102C105.487 0.204102 116.641 7.70492 116.641 23.8806C116.641 38.4257 106.335 46.9701 96.5516 46.9701ZM83.0501 19.3801C83.0501 32.0337 89.116 45.6004 99.2258 45.6004C105.944 45.6004 109.923 38.5561 109.923 27.8593C109.923 15.1405 103.922 1.57381 93.747 1.57381C87.0941 1.57381 83.0501 8.68329 83.0501 19.3801Z"
                                    fill="black" />
                                <path
                                    d="M141.457 46.9701C132.391 46.9701 121.238 39.4693 121.238 23.2936C121.238 8.74851 131.543 0.204102 141.327 0.204102C150.393 0.204102 161.546 7.70492 161.546 23.8806C161.546 38.4257 151.241 46.9701 141.457 46.9701ZM127.956 19.3801C127.956 32.0337 134.022 45.6004 144.131 45.6004C150.85 45.6004 154.828 38.5561 154.828 27.8593C154.828 15.1405 148.828 1.57381 138.653 1.57381C132 1.57381 127.956 8.68329 127.956 19.3801Z"
                                    fill="black" />
                                <path
                                    d="M199.538 23.2284H184.341V38.4909H181.471V23.2284H166.339V20.4889H181.471V5.22639H184.341V20.4889H199.538V23.2284Z"
                                    fill="black" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="save-time">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-start d-flex justify-content-between ">
                        <div className="col-6 st-block-1 align-self-center">
                            <h6 className="st">Save Time</h6>
                            <h1 className="hdng">Create more posts<br /> in less time</h1>
                            <p className="decs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="col-6 text-end st-block-2">
                            <img src="./assets/images/home/st-img.png" alt="Save-Time" />
                            <a href="#"><button className="ecd-btn"><img src="./assets/images/home/s-ecd-btnsds.png" /> Easy
                                    chicken dinner</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="extra-boost">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-start d-flex justify-content-between ">
                        <div className="col-6 text-end eb-block-1">
                            <img src="./assets/images/home/eb-img.png" alt="Save-Time" />
                        </div>
                        <div className="col-6 eb-block-2 align-self-center">
                            <h6 className="eb">EXTRA BOOST</h6>
                            <h1 className="hdng">Boost conversions, engagement and reach</h1>
                            <p className="decs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>

            

        </div>
    </div>


    <div className="testimonial">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <div className="col t-block-1">
                    <h6 className="sub-hdng">TESTIMONIALS</h6>
                    <h1 className="hdng">Hear from Our Community</h1>
                </div>
            </div>
        </div>

        <div className="container justify-content-center d-flex flex-column align-items-center t-slider">
            <div className="row w-100 text-center">
                <div className="col t-block-2">
                    <Home_test_slider />
                </div>
            </div>
        </div>
    </div>


    <div className="faq">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <div className="col faq-block-1">
                    <h6 className="sub-hdng">FAQ</h6>
                    <h1 className="hdng">Frequently Asked Questions</h1>
                </div>
            </div>

            <div className="row w-100 text-start">
                <div className="col faq-block-2">

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Lorem Ipsum Dolor Amet, constetur adipiscing?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Lorem Ipsum Dolor Amet, constetur adipiscing elit, sed do?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Lorem Ipsum Dolor Amet, constetur adipiscing elit, sed do?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Lorem Ipsum Dolor Amet, constetur adipiscing elit, sed do?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Lorem Ipsum Dolor Amet, constetur adipiscing elit, sed do?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Lorem Ipsum Dolor Amet, constetur adipiscing elit, sed do?
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                </div>
                            </div>
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
                    <h1 className="hdng">Sign up today and see the difference trendy UGC style content can make for your social media presence</h1>
                    <a href="#"><button className="sujn-btn">Sign Up</button></a>
                </div>
            </div>
        </div>
    </div>
      <Footer />
    </div>
  )
}
