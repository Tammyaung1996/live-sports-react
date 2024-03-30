import React from 'react'
import logo from '../assets/img/logo1.png'
import flag from '../assets/img/flag.png'
import { BiSolidBellRing } from "react-icons/bi";

const Navbar = () => {
    return (
        <div style={{background:'#10061e'}} className='fixed-top  py-2 d-flex justify-content-between align-items-center px-2 navs'>
            <img src={logo} alt="" width={'50px'}/>

            <div>
                <img src={flag} alt="" width={'30px'} height={'30px'} style={{borderRadius:'50%'}}/>
                <BiSolidBellRing size={30} className='ms-3' color='#5987cc'/>
            </div>
        </div>
    )
}

export default Navbar
