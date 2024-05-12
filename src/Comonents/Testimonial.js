import React from 'react'
import '../Css/Testimonial.css'
import img from '../Images/comment.png'

// carousel
import Slider from "react-slick";



const Testimonial = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 1,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
      
    };

    return (
        <>

            <div className="testimonial-container">

                <div className="title">
                    <h1>client testimonial</h1>
                    <i>
                        Suspendisse dictum enim sit amet libero malesuada feugiat.
                    </i>
                </div>

                <div className="comments">
                    <Slider {...settings}>

                        <div className="comment--one">
                            <h3> perfect home </h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, numquam minima quidem nam sit sunt beatae quisquam maxime similique saepe temporibus consectetur amet, illum maiores, qui ex alias unde at.
                            </p>
                            <img src={img} alt="" />
                            <p className="name">lukman abisoye, <span>customer</span></p>
                        </div>

                        <div className="comment--one">
                            <h3> perfect home </h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, numquam minima quidem nam sit sunt beatae quisquam maxime similique saepe temporibus consectetur amet, illum maiores, qui ex alias unde at.
                            </p>
                            <img src={img} alt="" />
                            <p className="name">lukman abisoye, <span>customer</span></p>
                        </div>
                        <div className="comment--one">
                            <h3> perfect home </h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, numquam minima quidem nam sit sunt beatae quisquam maxime similique saepe temporibus consectetur amet, illum maiores, qui ex alias unde at.
                            </p>
                            <img src={img} alt="" />
                            <p className="name">lukman abisoye, <span>customer</span></p>
                        </div>
                        <div className="comment--one">
                            <h3> perfect home </h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, numquam minima quidem nam sit sunt beatae quisquam maxime similique saepe temporibus consectetur amet, illum maiores, qui ex alias unde at.
                            </p>
                            <img src={img} alt="" />
                            <p className="name">lukman abisoye, <span>customer</span></p>
                        </div>
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Testimonial
