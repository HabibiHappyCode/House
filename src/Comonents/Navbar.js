import React from 'react'

import { Routes, Route } from "react-router-dom"
import Home from './Home'
import About from './About'
import Property from './Property'
import Contact from './Contact'
import Blog from './Blog'



const Navbar = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/property' element={<Property />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default Navbar
