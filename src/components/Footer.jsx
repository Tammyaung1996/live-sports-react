import React from 'react'
import { Link } from 'react-router-dom';

import { MdHomeFilled } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { CgPhone } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";

const Footer = () => {

    const footers = [
        { id: 1, icon: MdHomeFilled, title: 'ပင်မ', link: '/' },
        { id: 2, icon: FaWallet, title: 'ပိုက်ဆံအိတ်', link: '/wallet' },
        { id: 3, icon: ImPriceTags, title: 'ပရိုမိုးရှင်း', link: '/promotion' },
        { id: 4, icon: CgPhone, title: 'ဝန်ဆောင်မှုဖုန်း', link: '/service-phone' },
        { id: 5, icon: FaUserAlt, title: 'ကျွန်ုပ်', link: '/me-page' }
    ]
    return (
        <div className=' footers' style={{ background: '#10061e' }}>
            <div className='d-flex justify-content-around pt-2'>
                {
                    footers.map((footer) => {
                        return (
                            <Link to={footer.link} className='text-center text-decoration-none' >
                                <footer.icon size={25} style={{ color: '#b4a9a7' }} />
                                <p style={{ color: '#b4a9a7' }}>{footer.title}</p>
                            </Link>
                        );
                    })
                }

            </div>
        </div>
    )
}

export default Footer
