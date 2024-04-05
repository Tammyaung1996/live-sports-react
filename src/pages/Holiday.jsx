import React from "react";

const Holiday = ()=>{

    const holidays = [
        {id:1,day:'22',month:'DEC',content:'ထိုင်းဘုရင့် မွေးနေ့',date:'22/12/ 2023 (တနင်္လာနေ့)'},
        {id:2,day:'22',month:'DEC',content:'ထိုင်းဘုရင့် မွေးနေ့',date:'22/12/ 2023 (တနင်္လာနေ့)'},
        {id:3,day:'22',month:'DEC',content:'ထိုင်းဘုရင့် မွေးနေ့',date:'22/12/ 2023 (တနင်္လာနေ့)'}
    ]
    return (
        <>
        <div>
        {
            holidays.map((holiday)=>{
                return (
                    <div className="d-flex justify-contet-center align-items-center text-light px-2 mt-3" style={{lineHeight:'10px'}}>
                        <div className="p-2" style={{borderRadius:'12px 0 0 12px',background:'#5987cc'}}>
                            <p>{holiday.day}</p>
                            <p>{holiday.month}</p>
                        </div>
                        <div className="p-2 w-100" style={{borderRadius:'0 12px 12px 0',background:'#431e77'}}>
                            <p>{holiday.content}</p>
                            <p>{holiday.date}</p>
                        </div>
                    </div>
                );
            })
        }
        </div>
        
         
        </>
    );
}

export default Holiday