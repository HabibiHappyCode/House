import React from 'react'

// GSAP
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";



// imgages
import cardOne from '../Images/cardOne.jpg'
import cardTwo from '../Images/cardTwo.jpg'
import cardThree from '../Images/cardThree.jpg'
import cardFour from '../Images/cardFour.jpg'
import cardFive from '../Images/cardFive.jpg'
import cardSix from '../Images/cardSix.jpg'

// icons
import iconOne from '../Images/iconOne.webp'
import iconTwo from '../Images/iconTwo.webp'
import iconThree from '../Images/iconThree.webp'
import iconFour from '../Images/iconFour.webp'
import iconFive from '../Images/iconFive.webp'

import '../Css/CardsComp.css'

const CardsComp = () => {

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.card-box',
            markers: false,
            toggleActions: 'restart pause reverse pause',
            start: "top center",
            scrub: true
        }
    })

    tl.to([".card--one", ".card--two", ".card--three", ".card--four", ".card--five", ".card--six"], {
        yPercent: 1,
        stagger: 0.1,
        opacity: 1,
    })

    return (
        <>
            <div className="cards-container">

                <div className="text">
                    <h2>FEATURED PROPERTIES</h2>
                    <i>Suspendisse dictum enim sit amet libero malesuada feugiat.</i>
                </div>

                <div className="card-box">

                    <div className="card--one">

                        <div className="image">

                            <div className="sale">
                                <h5>for sale</h5>
                            </div>

                            <img src={cardOne} alt="card-one" />

                            <div className="price">
                                <h2>$945,679</h2>
                            </div>
                        </div>

                        <article>

                            <div className="area">
                                <p>Villa in Los Angeles</p>
                            </div>

                            <div className="address">
                                <img src={iconOne} alt="" />
                                <p>Upper Road 3411, no.34 CA</p>
                            </div>

                            <div className="infor">
                                <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
                            </div>

                            <div className="icons">
                                <div className="iconOne">
                                    <img src={iconTwo} alt="" />
                                </div>
                                <div className="iconOne">
                                    <img src={iconThree} alt="" />
                                    <p>2</p>
                                </div>
                                <div className="iconOne">
                                    <img src={iconFour} alt="" />
                                    <p>3</p>
                                </div>
                                <div className="iconOne">
                                    <img src={iconFive} alt="" />
                                    <p>120 sq ft</p>
                                </div>
                            </div>

                        </article>

                    </div>
                    <div className="card--two">

                        <div className="image">

                            <div className="sale">
                                <h5>for sale</h5>
                            </div>

                            <img src={cardTwo} alt="card-one" />

                            <div className="price">
                                <h2>$945,679</h2>
                            </div>
                        </div>

                        <article>

                            <div className="area">
                                <p>Villa in Los Angeles</p>
                            </div>

                            <div className="address">
                                <img src={iconOne} alt="" />
                                <p>Upper Road 3411, no.34 CA</p>
                            </div>

                            <div className="infor">
                                <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
                            </div>

                            <div className="icons">
                                <div className="iconOne">
                                    <img src={iconTwo} alt="" />
                                </div>
                                <div className="iconOne">
                                    <img src={iconThree} alt="" />
                                    <p>2</p>
                                </div>
                                <div className="iconOne">
                                    <img src={iconFour} alt="" />
                                    <p>3</p>
                                </div>
                                <div className="iconOne">
                                    <img src={iconFive} alt="" />
                                    <p>120 sq ft</p>
                                </div>
                            </div>

                        </article>

                    </div>
                    <div className="card--three">


                        <div className="image">

                            <div className="sale">
                                <h5>for sale</h5>
                            </div>

                            <img src={cardThree} alt="card-one" />

                            <div className="price">
                                <h2>$945,679</h2>
                            </div>
                        </div>

                        <article>

                            <div className="area">
                                <p>Villa in Los Angeles</p>
                            </div>

                            <div className="address">
                                <img src={iconOne} alt="" />
                                <p>Upper Road 3411, no.34 CA</p>
                            </div>

                            <div className="infor">
                                <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
                            </div>

                            <div className="icons">
                                <div className="iconOne">
                                    <img src={iconTwo} alt="" />
                                </div>
                                <div className="iconOne">
                                    <img src={iconThree} alt="" />
                                    <p>2</p>
                                </div>
                                <div className="iconOne">
                                    <img src={iconFour} alt="" />
                                    <p>3</p>
                                </div>
                                <div className="iconOne">
                                    <img src={iconFive} alt="" />
                                    <p>120 sq ft</p>
                                </div>
                            </div>

                        </article>

                    </div>
                    <div className="card--four">


                        <div className="image">

                            <div className="sale">
                                <h5>for sale</h5>
                            </div>

                            <img src={cardFour} alt="card-one" />

                            <div className="price">
                                <h2>$945,679</h2>
                            </div>
                        </div>

                        <article>

                            <div className="area">
                                <p>Villa in Los Angeles</p>
                            </div>

                            <div className="address">
                                <img src={iconOne} alt="" />
                                <p>Upper Road 3411, no.34 CA</p>
                            </div>

                            <div className="infor">
                                <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
                            </div>

                            <div className="icons">
                                <div className="iconOne">
                                    <img src={iconTwo} alt="" />
                                </div>
                                <div className="iconOne">
                                    <img src={iconThree} alt="" />
                                    <p>2</p>
                                </div>
                                <div className="iconOne">
                                    <img src={iconFour} alt="" />
                                    <p>3</p>
                                </div>
                                <div className="iconOne">
                                    <img src={iconFive} alt="" />
                                    <p>120 sq ft</p>
                                </div>
                            </div>

                        </article>

                    </div>
                    <div className="card--five">


                        <div className="image">

                            <div className="sale">
                                <h5>for sale</h5>
                            </div>

                            <img src={cardFive} alt="card-one" />

                            <div className="price">
                                <h2>$945,679</h2>
                            </div>
                        </div>

                        <article>

                            <div className="area">
                                <p>Villa in Los Angeles</p>
                            </div>

                            <div className="address">
                                <img src={iconOne} alt="" />
                                <p>Upper Road 3411, no.34 CA</p>
                            </div>

                            <div className="infor">
                                <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
                            </div>

                            <div className="icons">
                                <div className="iconOne">
                                    <img src={iconTwo} alt="" />
                                </div>
                                <div className="iconOne">
                                    <img src={iconThree} alt="" />
                                    <p>2</p>
                                </div>
                                <div className="iconOne">
                                    <img src={iconFour} alt="" />
                                    <p>3</p>
                                </div>
                                <div className="iconOne">
                                    <img src={iconFive} alt="" />
                                    <p>120 sq ft</p>
                                </div>
                            </div>

                        </article>

                    </div>
                    <div className="card--six">


                        <div className="image">

                            <div className="sale">
                                <h5>for sale</h5>
                            </div>

                            <img src={cardSix} alt="card-one" />

                            <div className="price">
                                <h2>$945,679</h2>
                            </div>
                        </div>

                        <article>

                            <div className="area">
                                <p>Villa in Los Angeles</p>
                            </div>

                            <div className="address">
                                <img src={iconOne} alt="" />
                                <p>Upper Road 3411, no.34 CA</p>
                            </div>

                            <div className="infor">
                                <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
                            </div>

                            <div className="icons">
                                <div className="iconOne">
                                    <img src={iconTwo} alt="" />
                                </div>
                                <div className="iconOne">
                                    <img src={iconThree} alt="" />
                                    <p>2</p>
                                </div>
                                <div className="iconOne">
                                    <img src={iconFour} alt="" />
                                    <p>3</p>
                                </div>
                                <div className="iconOne">
                                    <img src={iconFive} alt="" />
                                    <p>120 sq ft</p>
                                </div>
                            </div>

                        </article>

                    </div>

                </div>

            </div>
        </>
    )
}

export default CardsComp
