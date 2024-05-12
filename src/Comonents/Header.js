import React from 'react'
import Navbar from './Navbar'

import { useState } from 'react'

import { Link } from 'react-router-dom'

import '../Css/Header.css'

const Header = () => {

    const [ openMenu, setOpenMenu ] = useState(false)

    return (
        <>

            <div className="header">

                <div className="logo">
                    <h1> <Link to='/'>habibi</Link> </h1>
                </div>

                <div className="hamburger" onClick={ ()=> {
                    setOpenMenu(!openMenu)
                } }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>


                <ul className={ openMenu ? "open" : "" }>
                    <li></li>
                    <li> <Link to='/'>home</Link> </li>
                    <li> <Link to='/about'>about us</Link> </li>
                    <li> <Link to='/property'>properties</Link> </li>
                    <li> <Link to='/blog'>blog</Link> </li>
                    <li> <Link to='/contact'>contact</Link> </li>
                </ul>


            </div>

            <Navbar />

        </>
    )
}

export default Header
