import React, { useState } from 'react'
import '../assets/css/twoD.css'
import PlayerInfo from '../components/PlayerInfo'
import list from '../assets/img/list.png';
import winner from '../assets/img/winner.png';
import holiday from '../assets/img/holiday.png';
import { NavLink } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

const TwoDPage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const lottoHome = [
        { id: 1, title: 'မှတ်တမ်း', img: list, link: '/' },
        { id: 2, title: 'ကံထူးရှင်များ', img: winner, link: '/' },
        { id: 3, title: 'ပိတ်ရက်', img: holiday, link: '/' },
    ];
    const times = [
        { time: '10:30 AM', class: 'whiteBtn' },
        { time: '12:00 AM', class: 'whiteBtn' },
        { time: '02:30 AM', class: 'purpleBtn' },
        { time: '04:30 AM', class: 'purpleBtn' },
    ]
    return (
        <div className='twoDContainer py-2 pb-5'>
            <PlayerInfo />
            <div className="my-3  mx-3 text-center py-2 border-top border-bottom">
                <h1 className='number'>26</h1>
                <small className='text-light'>11:50:00 AM တွင် ထီပိတ်ပါမည်။</small>
            </div>
            <div className="text-center  mb-4" >
                <button className='betBtn btn ' onClick={handleShow}>
                    ထိုးမည်
                </button>

                <Modal className='lottoModal' show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <small>ထိုးမည့်အချိန် ရွေးပါ။</small>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {times.map((item) => {
                            return <NavLink to={'/2d/chooseNumber'} key={item.time} >
                                <button onClick={handleClose} className={`${item.class} py-2 border-0 w-100 text-center  rounded-3 mb-3`}>
                                    {item.time}
                                </button>
                            </NavLink>
                        })}
                    </Modal.Body>

                </Modal>
            </div>
            <div className="mb-5 lottoHomeContainer px-3 py-2 mt-4 ">
                <div className="midMenu d-flex align-items-center justify-content-between ">
                    {lottoHome.map((item) => {
                        return <NavLink to={item.link} key={item.id}>
                            <div className='d-flex flex-column align-items-center'>
                                <img src={item.img} />
                                <small >{item.title}</small>
                            </div>
                        </NavLink>
                    })}
                </div>
                <table className='my-4'>
                    <tr>
                        <th>Time</th>
                        <th>Set</th>
                        <th>Value</th>
                        <th>2D</th>
                    </tr>
                    <tr>
                        <td>10:30 AM</td>
                        <td>1399.51</td>
                        <td>11,444.80</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>10:30 AM</td>
                        <td>1399.51</td>
                        <td>11,444.80</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>10:30 AM</td>
                        <td>1399.51</td>
                        <td>11,444.80</td>
                        <td>14</td>
                    </tr>

                </table>
                <table className='my-4'>
                    <tr>
                        <th>Time</th>
                        <th>Modern</th>
                        <th>Internet</th>
                    </tr>
                    <tr>
                        <td>Time</td>
                        <td>Modern</td>
                        <td>Internet</td>
                    </tr>
                    <tr>
                        <td>Time</td>
                        <td>Modern</td>
                        <td>Internet</td>
                    </tr>

                </table>
            </div>

        </div>
    )
}

export default TwoDPage
