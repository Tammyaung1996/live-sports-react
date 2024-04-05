import React from "react";

import profile from '../assets/img/profile.jpg';

const LeaderBoard = ()=>{
    const winners = [
        {id:1,img:'profile',name:'ဘိုးတော်မောင်ပေါက်စီ',phone:'09******213'},
        {id:2,img:'profile',name:'ဘိုးတော်မောင်ပေါက်စီ',phone:'09******213'},
        {id:3,img:'profile',name:'ဘိုးတော်မောင်ပေါက်စီ',phone:'09******213'},
        {id:4,img:'profile',name:'ဘိုးတော်မောင်ပေါက်စီ',phone:'09******213'},
    ]
    return (
        <>          
        <div style={{marginBottom:'100px'}}>
            <p className="text-center fw-bold" style={{color:'#5987cc',fontSize:'4rem'}}>22</p>
            <hr className="text-light"/>

            <button className="px-2 text-light btn w-100" style={{background:'#5987cc'}}>ထိပ်ဆုံး 2D ကံထူးရှင် (၁၀၀)ဦး</button>

            <div className="text-light mt-3 d-flex justify-content-around align-items-center">

                <div className="text-center rounded mt-5" style={{border:'1px solid #5987cc'}}>
                    <p  className="mt-2">2<sup>nd</sup></p>
                    <img src={profile} alt="" height={'50px'} style={{borderRadius:'50%'}}/>
                    <div className="mt-2" style={{fontSize:'14px',lineHeight:'7px'}}> 
                        <p >အေးအေးအောင်</p>
                        <p>0997****826</p>
                    </div>

                    <hr className="text-light mx-3"/>

                    <div style={{fontSize:'13px',lineHeight:'10px'}}>
                        <p>ထိုးငွေ : 50,000</p>
                        <p style={{color:'#5987cc'}}>အနိုင်ရငွေ : 40,500,000</p>
                    </div>
                </div>
                <div className="text-center  rounded" style={{border:'1px solid #5987cc'}}>
                    <p  className="mt-2">1<sup>st</sup></p>
                    <img src={profile} alt="" height={'50px'} style={{borderRadius:'50%'}}/>
                    <div className="mt-2" style={{fontSize:'14px',lineHeight:'7px'}}> 
                        <p >အေးအေးအောင်</p>
                        <p>0997****826</p>
                    </div>

                    <hr className="text-light mx-3"/>

                    <div style={{fontSize:'13px',lineHeight:'10px'}}>
                        <p>ထိုးငွေ : 50,000</p>
                        <p style={{color:'#5987cc'}}>အနိုင်ရငွေ : 40,500,000</p>
                    </div>
                </div>
                <div className="text-center rounded mt-5" style={{border:'1px solid #5987cc'}}>
                    <p  className="mt-2">3<sup>rd</sup></p>
                    <img src={profile} alt="" height={'50px'}  style={{borderRadius:'50%'}}/>
                    <div className="mt-2" style={{fontSize:'14px',lineHeight:'7px'}}> 
                        <p >အေးအေးအောင်</p>
                        <p>0997****826</p>
                    </div>

                    <hr className="text-light mx-3"/>

                    <div style={{fontSize:'13px',lineHeight:'10px'}}>
                        <p>ထိုးငွေ : 50,000</p>
                        <p style={{color:'#5987cc'}}>အနိုင်ရငွေ : 40,500,000</p>
                    </div>
                </div>

            </div>

            <div className="mt-5">
                {
                    winners.map((winner)=>{
                        return (
                            <>
                            <div className="d-flex justify-content-around align-items-start text-light px-2 mt-2" style={{lineHeight:'15px'}}>
                                <p className="px-2">{winner.id}</p>
                                <img src={profile} alt="" height={'50px'} style={{borderRadius:'50%'}}/>
                                <div>
                                    <p>{winner.name}</p>
                                    <p>{winner.phone}</p>
                                </div>
                                <div className="text-end">
                                    <p>ထိုးငွေ : 50,000</p>
                                    <p style={{color:'#5987cc'}}>အနိုင်ရငွေ : 40,500,000</p>
                                </div>
                            </div>
                            <hr className="text-light mx-3"/>
                        </>
                        );
                    })
                }
                
            </div>
        </div>
        </>
    );
}

export default LeaderBoard