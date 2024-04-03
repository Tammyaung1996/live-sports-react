import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import LottoNavbar from './LottoNavbar'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
    const { pathname } = useLocation();
    return (
        <div className=" ">

            <div className='main'>
                {pathname.includes('/2d') || pathname.includes('/3d') || pathname.includes('/football') ? <LottoNavbar /> : <Navbar />}
                <Outlet />
                <Footer />

            </div>

        </div>
    )
}

export default Layout
