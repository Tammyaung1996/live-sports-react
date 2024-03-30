import React from 'react'
import '../assets/css/chooseNumber.css';
import PlayerInfo from '../components/PlayerInfo';
import TwoDChooseOption from '../components/TwoDChooseOption';
import { Form } from 'react-bootstrap';
import info from '../assets/img/info.png';
import TwoDChooseNumFooter from '../components/TwoDChooseNumFooter';
const TwoDChooseNumberPage = () => {
    const getActiveBarColor = (percent) => {
        return percent === 100 ? 'grey' : percent >= 90 ? 'red' : percent > 50 ? 'orange' : percent < 50 && percent > 0 ? 'green' : ''
    }
    const numbers = [
        { number: '00', percent: 0 },
        { number: '01', percent: 30, },
        { number: '02', percent: 80, },
        { number: '03', percent: 90 },
        { number: '04', percent: 100, },
        { number: '05', percent: 80, },
        { number: '06', percent: 40, },
        { number: '07', percent: 100, },
        { number: '08', percent: 0, },
        { number: '09', percent: 0, },
    ]
    const numbers2 = Array.from({ length: 92 }, (_, index) => index + 10);
    return (
        <div className='twoDContainer '>
            <PlayerInfo />
            <TwoDChooseOption />
            <div className="px-2">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="number" placeholder="အနည်းဆုံး ၁၀၀ကျပ်" />
                    </Form.Group>
                </Form>
                <div >
                    <div className="betClose rounded-3 py-3 px-3">
                        <p className='text-center p-0 m-0 mb-2'>11:50:00 AMတွင် ထီပိတ်ပါမည်။</p>
                        <div className="cursorPointer d-flex align-items-center">
                            <img src={info} />
                            <small>အရောင်ရှင်းလင်းချက်</small>
                        </div>
                    </div>
                    <div className="twoDNumbers py-3 px-2">
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                            {numbers.map((item) => {
                                return <div className="cursorPointer rounded-2 text-center numberContainer ">
                                    <p className='number'>{item.number}</p>
                                    <div className="bar" >
                                        <div className="activeBar" style={{ width: item.percent + '%', background: getActiveBarColor(item.percent) }}>
                                        </div>
                                    </div>
                                </div>
                            })}{numbers2.map((item) => {
                                return <div className="cursorPointer rounded-2 text-center numberContainer ">
                                    <p className='number'>{item}</p>
                                    <div className="bar" >
                                        <div className="activeBar" style={{ width: '0%', background: '' }}>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <TwoDChooseNumFooter />
        </div>
    )
}

export default TwoDChooseNumberPage
