import React from 'react'

// images
import signature from '../Images/signature.png.webp'
import prize from '../Images/prize.png'
import phone from '../Images/phone-call.png.webp'
import envelope from '../Images/envelope.png.webp'
import editor from '../Images/editor.jpg.webp'

import '../Css/Contract.css'

const Contract = () => {
    return (
        <>

            <div className="contract-container">

                <div className="contract-one">

                    <div className="name">
                        <img src={prize} alt="" />
                        <h1>JEREMY SCOTT</h1>
                        <i>Realtor</i>
                    </div>

                    <p className='p'>
                        Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odiomattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Curabitur rhoncus auctor eleifend. Fusce venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id. Phasellus fringilla nisl sed sem scelerisque, eget aliquam magna vehicula
                    </p>

                    <div className="call">
                        <p>
                            <img src={phone} alt="" /> <span>+234 8149285789</span>
                        </p>
                        <p>
                            <img src={envelope} alt="" /> <span>abdulmalikiyiola@gmail.com</span>
                        </p>
                    </div>

                    <div className="sign">
                        <img src={signature} alt="" />
                    </div>

                </div>
                <div className="contract-two">

                    <img src={editor} alt="" />

                </div>

            </div>

        </>
    )
}

export default Contract
