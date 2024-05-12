import React from 'react'

import Slider from "react-slick";

import sliderOne from '../Images/sliderOne.jpg'
import sliderTwo from '../Images/sliderTwo.jpg'
import sliderThree from '../Images/sliderThree.jpg'
import sliderFour from '../Images/sliderFour.jpg'
import sliderFive from '../Images/sliderFive.jpg'

import '../Css/SliderCom.css'

const SliderCom = () => {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",

    };

    return (
        <div className="slider-container">
            <Slider {...settings}>


                <div className="slider--one">
                    <img src={sliderOne} alt="slider-one" />
                </div>
                <div className="slider--two">
                    <img src={sliderTwo} alt="slider-two" />
                </div>
                <div className="slider--three">
                    <img src={sliderThree} alt="slider-three" />
                </div>
                <div className="slider--four">
                    <img src={sliderFour} alt="slider-four" />
                </div>
                <div className="slider--five">
                    <img src={sliderFive} alt="slider-five" />
                </div>
            </Slider>

        </div>
    )
}

export default SliderCom
