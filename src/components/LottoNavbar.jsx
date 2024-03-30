import React from 'react'
import '../assets/css/twoD.css';
import logo from '../assets/img/logo1.png';
import backArrow from '../assets/img/backArrow.png';
import support from '../assets/img/support.png';
import { NavLink } from 'react-router-dom';

const LottoNavbar = () => {
    return (
        <div className='lottoNavbar px-2 px-sm-3 py-2 d-flex align-items-center justify-content-between'>
            <NavLink to={() => history.back()}>
                <img src={backArrow} className='backArrow' />
            </NavLink>
            <NavLink to={'/'}>
                <img src={logo} className='lottoLogo' />
            </NavLink>
            <img src={support} className='support' />
        </div>
    )
}

export default LottoNavbar
