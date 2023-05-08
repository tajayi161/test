import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import {Outlet} from 'react-router-dom'
// Outlet : allows UI to show up when child routes
// when child routes are rendered 


const MainLayout = () => {
    return (
        <>

        <Navbar/>
        <Outlet/>
        {/* outlet - allows content to render  */}
        <Footer/>
        </>
    )
}

export default MainLayout