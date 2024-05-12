import React from 'react'

import one from '../Images/sliderOne.jpg'
import phone from '../Images/phone-call.png.webp'
import envelope from '../Images/envelope.png.webp'


import '../Css/Footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer-container">

                <div className="foot">

                    <div className="footer-about">

                        <h2>about us</h2>
                        <div className="img">
                            <img src={one} alt="" />
                        </div>
                        <div className="name">
                            <h1>habibi</h1>
                            <p>
                                Integer nec bibendum lacus. Suspen disse dictum enim sit amet libero males uada feugiat. Praesent malesuada.
                            </p>
                        </div>

                    </div>

                    <div className="footer-hours">
                    <h2>hours</h2>

                        <div className="day">
                            <h3>
                                <span>monday - friday</span>
                                <span>09AM - 19PM</span>
                            </h3>
                            <h3>
                                <span>saturday</span>
                                <span>09AM - 14PM</span>
                            </h3>
                            <h3>
                                <span>sunday</span>
                                <span>closed</span>
                            </h3>
                        </div>

                        <div className="phone">
                            <p>
                                <img src={phone} alt="" /> <span>+234 8149285789</span>
                            </p>
                            <p>
                                <img src={envelope} alt="" /> <span>abdulmalikiyiola@gmail.com</span>
                            </p>
                        </div>

                    </div>



                </div>

            </div>
        </>
    )
}

export default Footer
