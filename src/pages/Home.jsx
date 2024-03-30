import React from 'react'
import '../assets/css/home.css'

import { FaUserCircle } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

const HomePage = () => {
    return (
        <div style={{background:'#10061e'}}>
            <div className="homes px-2">

                <div className='d-flex justify-content-start align-items-center' style={{color:'#aca1a1'}}>
                    <FaUserCircle size={50}/>
                    <div className='ms-3 mt-3' style={{lineHeight:'12px'}}>
                        <h5>Su Su Aung</h5>
                        <p>ID009975434672</p>
                    </div>
                </div>

                <div className='d-flex justify-content-around align-items-center py-3' style={{background:'#56bcd3',color:'#534f4f',borderRadius:'15px'}}>
                    <div>
                        <h6>လက်ကျန်ငွေ (ကျပ်)</h6>
                        <h3>123,456.00</h3>
                    </div>
                    <button className='btn p-2 rounded' style={{background:'#5987cc'}}><FaWallet size={25} className='mx-2'/>ငွေဖြည့်မည်</button>
                </div>

            </div>
        </div>
    )
}

export default HomePage
