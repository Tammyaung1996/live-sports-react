import React from 'react'
import { Outlet } from 'react-router-dom'
import LottoNavbar from './LottoNavbar'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <div className="main">
            {window.location.pathname.includes('/2d') || window.location.pathname.includes('/2d') || window.location.pathname.includes('/football') ? <LottoNavbar /> : <Navbar />}
            <Outlet />

        </div>
    )
}

export default Layout
