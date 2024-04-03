import React, { useState } from 'react'
import '../assets/css/twoDCheckout.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import divider from '../assets/img/divider.png'
import { Button, Modal } from 'react-bootstrap';
const TwoDCheckoutPage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editId, setEditId] = useState();
    return (
        <div className='twoDCheckout py-3 px-2 px-sm-5'>
            <p className="text-center pb-2" style={{ textDecoration: 'underline' }}>ထိုးမည့် ဂဏန်းများ</p>
            <div className="my-3">
                <div className="mb-3 row text-center">
                    <div className="col-3">စဉ်</div>
                    <div className="col-3">ဂဏန်း</div>
                    <div className="col-3">ငွေပမာဏ</div>
                    <div className="col-3">ပြင် / ဖျက်</div>
                </div>
                {[1, 2, 3, 4, 5, 6].map((item, index) => {
                    return <div key={index} className="mb-3 row text-center">
                        <div className="col-3">{index}</div>
                        <div className="col-3">123</div>
                        <div className="col-3">
                            {editId === index ? <input value={500} /> : '500'}
                        </div>
                        <div className="col-3">
                            <FaEdit onClick={() => setEditId(index)} color='#B4A9A7' />
                            <MdDelete onClick={handleShow} size={22} className='ms-2 text-danger' />
                        </div>
                    </div>
                })}
                <div className="mt-4 text-center">
                    <img src={divider} />
                </div>
                <h4 className=' mt-4 text-center fw-bold'>12,000,000 <small>ကျပ်</small></h4>
                <div className="mt-4 mb-2 d-flex gap-2 justify-content-center">
                    <button className=" chooseNumDelBtn py-2 px-4 rounded-3">ဖျက်မည်</button>
                    <button className=" chooseNumBetBtn py-2 px-4 rounded-3">ထိုးမည်</button>
                </div>
            </div>
            <Modal className='lottoModal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ဖျက်မည်</Modal.Title>
                </Modal.Header>
                <Modal.Body>ရွေးချယ်ထားသော ဂဏန်းအားလုံးကို ဖျက်လိုပါသလား?</Modal.Body>
                <Modal.Footer>

                    <Button style={{ background: '#431E77', border: 'none' }} onClick={handleClose}>
                        ဖျက်မည်
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default TwoDCheckoutPage
