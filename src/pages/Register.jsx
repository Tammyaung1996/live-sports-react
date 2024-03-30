import React from "react";
import { Form , Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import '../assets/css/login.css'

import logo from '../assets/img/logo1.png'

const Register = ()=>{
    return (
        <>
        <div style={{background:'#10061e'}}>
            <div className="d-flex justify-content-center logins">
                <img src={logo} alt="" />
            </div>
            <div style={{background:'#431e77',color:'#d0c7dd',height:'100vh',borderTopLeftRadius:'50px',borderTopRightRadius:'50px'}} className="py-3">
                <div className="text-center">
                    <h6>အကောင့်အသစ်ဖွင့်ရန်</h6>
                </div>

                <Form className="mx-2" style={{color:'#7d64a0'}}>
                   
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{fontSize:'14px'}}>အမည်</Form.Label>
                            <Form.Control type="text" className="inputs" placeholder="အမည်ထည့်ပါ" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{fontSize:'14px'}}>လျှိ၀ှက်နံပါတ်</Form.Label>
                            <Form.Control type="password" className="inputs" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{fontSize:'14px'}}>လျှိ၀ှက်နံပါတ် အတည်ပြုပါ</Form.Label>
                            <Form.Control type="password" className="inputs" placeholder="Password" />
                    </Form.Group>

                    <div className="d-flex justify-content-center mt-3">
                        <Button variant="primary" type="submit" className="d-block w-100" style={{background:'#5987cc'}}>
                        ဆက်လုပ်မည်
                        </Button>
                    </div>

                    <div className="text-center mt-4">
                        <span style={{fontSize:'12px'}}>အကောင့်ရှိပြီးသားလား?  <Link to='/login'>အကောင့်ဝင်ပါ</Link> </span>
                    </div>
                </Form>
            </div>
        </div>
        </>
    );
}

export default Register