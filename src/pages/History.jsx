import React from "react";
import Table from 'react-bootstrap/Table';

import '../assets/css/history.css';


const History = () =>{
    const currentDate = new Date().toLocaleString();

    const results = [
        {id:1,no:'31',amount:'300',date:currentDate},
        {id:2,no:'31',amount:'300',date:currentDate},
        {id:3,no:'31',amount:'300',date:currentDate}
    ]
    return (
        <>
            <div>
                <h6 style={{color:'#5987cc'}}>2D မှတ်တမ်း</h6>
                <Table striped bordered hover  className="color-table">
                    <thead >
                        <tr>
                        <th>စဉ်</th>
                        <th>ဂဏန်း</th>
                        <th>ငွေပမာဏ(ကျပ်)</th>
                        <th>ရက်စွဲ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            results.map((result)=>{
                                return (
                                    <tr>
                                    <td>{result.id}</td>
                                    <td>{result.no}</td>
                                    <td>{result.amount}</td>
                                    <td>{result.date}</td>
                                    </tr>
                                );
                            })
                        }
                        
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default History