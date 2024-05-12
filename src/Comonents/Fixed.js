import React from 'react'

import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/all'

import '../Css/Fixed.css'

const Fixed = () => {


    gsap.registerPlugin( ScrollTrigger )

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.fixed-text',
            markers: false,
            toggleActions: 'restart complete complete complete',
            // scrub: true
        }
    })

    tl.from([".h1", ".p", '.button'], {
        opacity: 0,
        delay: 0.1,
        stagger: 0.3
    })

    tl.to([".h1", ".p", '.button'], {
        yPercent: -100,
        duration: 1,
        delay: 0.1,
        opacity: 1,
        stagger: 0.3
    })

    return (
        <>

            <div className="fixed-container">
                <div className="fixed-text">
                    <h1 className='h1'>
                        ARE YOU LOOKING FOR A PLACE TO RENT?
                    </h1>
                    <p className='p'>
                    Suspendisse dictum enim sit amet libero malesuada feugiat.
                    </p>
                    <button className='button'>SEARCH</button>
                </div>
            </div>

        </>
    )
}

export default Fixed
