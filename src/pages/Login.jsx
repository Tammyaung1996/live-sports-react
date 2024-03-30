import React from "react";
import '../assets/css/login.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import logo from '../assets/img/logo1.png';
import flag from '../assets/img/flag.png';
import { LuPhoneCall } from "react-icons/lu";
import { FiKey } from "react-icons/fi";

const Login = ()=>{
    return (
        <>
        <div style={{background:'#10061e'}}>
            <div className="d-flex justify-content-center logins">
                <img src={logo} alt="" />
            </div>
            <div style={{background:'#431e77',color:'#d0c7dd',height:'100vh',borderTopLeftRadius:'50px',borderTopRightRadius:'50px'}} className="py-3">
                <div className="text-center">
                    <h6>အကောင့်ဝင်ရန်</h6>
                    <h3 className="text-light">Welcome Back!</h3>
                    <span style={{fontSize:'12px'}}>welcome back we missed you</span>
                </div>

                <Form className="mx-2" style={{color:'#7d64a0'}}>
                    {/* <Form.Group className="mb-3">
                        <Form.Select >
                        <option value="1"><img src={flag} alt="" /></option>
                        </Form.Select>
                    </Form.Group> */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{fontSize:'14px'}}>ဖုန်းနံပါတ်</Form.Label>
                            <Form.Control type="text" className="inputs" placeholder="03123456789" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{fontSize:'14px'}}>လျှိ၀ှက်နံပါတ်</Form.Label>
                            <Form.Control type="password" className="inputs" placeholder="Password" />
                    </Form.Group>

                    <span style={{fontSize:'12px'}} >လျှိ၀ှက်နံပါတ် မမှတ်မိဘူးလား ? <Link to='/forget-password' >ဒီမှာနှိပ်ပါ</Link> </span>

                    <div className="d-flex justify-content-center mt-3">
                        <Button variant="primary" type="submit" className="d-block w-100" style={{background:'#5987cc'}}>
                        အကောင့်၀င်မည်
                        </Button>
                    </div>

                    <div className="text-center mt-4">
                        <span style={{fontSize:'12px'}}>အကောင့်အသစ်ဖွင့်ရန် <Link to='/register'>ဒီမှာနှိပ်ပါ</Link> </span>
                    </div>
                </Form>
            </div>
        </div>
        </>
    );
}

export default Login