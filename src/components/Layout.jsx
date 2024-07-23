import React from 'react'
import {Outlet} from "react-router-dom"

import Footer from './Footer'
import NavBar from './Navbar'

const Layout = () => {
  return (
    <>
    <NavBar />
        <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout