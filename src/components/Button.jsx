import React from "react";
import '../assets/css/home.css'

import bannerone from '../assets/img/banner3.png';
import bannertwo from '../assets/img/banner4.png';

const Button = ()=>{
     return (
        <>
        <div>
            <div className="d-flex justify-content-around align-items-center mt-4">
                <div className="bg-light px-4 py-2 rounded-4">
                    <h1 class="gradient-text bg-light">2D</h1>
                </div>
                <div className="bg-light px-4 py-2 rounded-4">
                    <h1 class="gradient-text bg-light">3D</h1>
                </div>
            </div>

            <div className="d-flex justify-content-around align-items-center px-2   mt-3">
                <img src={bannerone} alt="" className="w-50 px-1" height={'100px'}/>
                <img src={bannertwo} alt="" className="w-50 px-1" height={'100px'}/>
            </div>
        </div>
        
        </>
     );
}

export default Button