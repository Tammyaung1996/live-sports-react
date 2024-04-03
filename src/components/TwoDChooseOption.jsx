import React, { useState } from 'react'
import maze from '../assets/img/maze.png';
import flash from '../assets/img/flash.png';
import repeat from '../assets/img/repeat.png';
import dream from '../assets/img/dream.png';
import { Button, Modal } from 'react-bootstrap';
import '../assets/css/chooseNumber.css'
const TwoDChooseOption = () => {
    const [isOp1Show, setIsOp1Show] = useState(false);
    const [isOp2Show, setIsOp2Show] = useState(false);
    const [isOp3Show, setIsOp3Show] = useState(false);
    const [isOp4Show, setIsOp4Show] = useState(false);
    const breakNums = ['0/10', '1/11', '2/12', '3/13', '4/14', '5/15', '6/16', '7/17', '8/18', '9/19'];
    const sgDblSizes = ['ညီအစ်ကို', 'ကြီး', 'ငယ်', 'မ', 'စုံ', 'စုံစုံ', 'စုံမ', 'မစုံ', 'မမ', 'အပူး'];
    const pate = ['0/10', '0/10', '0/10', '0/10', '0/10', '0/10', '0/10', '0/10', '0/10', '0/10'];
    const htate = ['0/10', '0/10', '0/10', '0/10', '0/10', '0/10', '0/10', '0/10', '0/10', '0/10'];
    const naut = ['0/10', '0/10', '0/10', '0/10', '0/10', '0/10', '0/10', '0/10', '0/10', '0/10'];
    const natkhat = ['မြန်မာနက္ခတ် 07, 18, 24, 35, 69', 'မြန်မာနက္ခတ် R 07, 18, 24, 35, 69', 'ပါဝါ 05, 16, 27, 38, 49', 'ပါဝါ R 50, 61, 72, 83, 94', 'ထိုင်းနက္ခတ် 07, 19, 23, 48, 56', 'ထိုင်းနက္ခတ် R 70, 91, 32, 84, 65', 'ထိုင်းပါဝါ 09, 13, 26, 47, 58', 'ထိုင်းပါဝါ R 90, 31, 62, 74, 85'];
    const kwat20 = ['00-19', '20-39', '40-59', '60-79', '80-99']

    return (
        <div className='px-3 py-3 d-flex align-items-center justify-content-between'>
            <div className='text-center' onClick={() => setIsOp1Show(!isOp1Show)} >
                <img src={maze} style={{ width: '30px', height: '30px' }} />
                <div>
                    <small style={{ color: '#5987CC' }} >အခွေ</small>
                </div>
            </div>
            <div className='text-center' onClick={() => setIsOp2Show(!isOp2Show)} >
                <img src={flash} style={{ width: '30px', height: '30px' }} />
                <div>
                    <small style={{ color: '#5987CC' }} >အမြန်ရွေး</small>
                </div>
            </div>

            <div className='text-center' onClick={() => setIsOp3Show(!isOp3Show)} >
                <img src={repeat} style={{ width: '30px', height: '30px' }} />
                <div>
                    <small style={{ color: '#5987CC' }} >ပတ်လည်</small>
                </div>
            </div>
            <div className='text-center' onClick={() => setIsOp4Show(!isOp4Show)} >
                <img src={dream} style={{ width: '30px', height: '30px' }} />
                <div>
                    <small style={{ color: '#5987CC' }} >အိပ်မက်</small>
                </div>
            </div>
            <Modal className='lottoModal' show={isOp1Show} onHide={() => setIsOp1Show(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>ခွေမည့်ဂဏန်းများကို ရွေးပါ။</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <small className="text-center">ဂဏန်း ၃လုံးမှ ၁၀လုံးအထိ ရွေးပါ။</small>
                    <div className="my-3 d-flex align-items-center justify-content-center flex-wrap gap-3">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
                            return <button key={number} className='kwayNumber'>{number}</button>
                        })}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='chooseNumDelBtn' variant="secondary" onClick={() => setIsOp1Show(false)}>
                        ဖျက်မည်
                    </Button>
                    <Button className='chooseNumBetBtn' variant="primary" onClick={() => setIsOp1Show(false)}>
                        အိုကေ
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal className='amyanChooseModal' show={isOp2Show} onHide={() => setIsOp2Show(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>အမြန်ရွေး</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setIsOp2Show(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setIsOp2Show(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal className='lottoModal' show={isOp3Show} onHide={() => setIsOp3Show(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setIsOp3Show(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setIsOp3Show(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal className='lottoModal' show={isOp4Show} onHide={() => setIsOp4Show(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setIsOp4Show(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setIsOp4Show(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default TwoDChooseOption

{/* 
 <div className="mb-2">
                        <p className="text-white ">ဘရိတ်</p>
                        <div className="mt-4 d-flex gap-3 justify-content-center flex-wrap align-items-center">
                            {breakNums.map((n) => {
                                return <button key={n} className='amyanChooseNumber'>{n}</button>
                            })}
                        </div>
                    </div>
                    <div className="mb-2">
                        <p className="text-white ">Single & Double Size</p>
                        <div className="mt-4 d-flex gap-3 justify-content-center flex-wrap align-items-center">
                            {sgDblSizes.map((n) => {
                                return <button key={n} className='amyanChooseNumber'>{n}</button>
                            })}
                        </div>
                    </div>
                    <div className="mb-2">
                        <p className="text-white ">ပတ်သီး</p>
                        <div className="mt-4 d-flex gap-3 justify-content-center flex-wrap align-items-center">
                            {pate.map((n) => {
                                return <button key={n} className='amyanChooseNumber'>{n}</button>
                            })}
                        </div>
                    </div>
                    <div className="mb-2">
                        <p className="text-white ">ထိပ်</p>
                        <div className="mt-4 d-flex gap-3 justify-content-center flex-wrap align-items-center">
                            {htate.map((n) => {
                                return <button key={n} className='amyanChooseNumber'>{n}</button>
                            })}
                        </div>
                    </div>
                    <div className="mb-2">
                        <p className="text-white ">နောက်</p>
                        <div className="mt-4 d-flex gap-3 justify-content-center flex-wrap align-items-center">
                            {naut.map((n) => {
                                return <button key={n} className='amyanChooseNumber'>{n}</button>
                            })}
                        </div>
                    </div>
                    <div className="mb-2">
                        <p className="text-white ">နက္ခတ် ပါဝါ</p>
                        <div className="mt-4 d-flex flex-column gap-2 ">
                            {natkhat.map((n) => {
                                return <button key={n} className='natkhatChooseNumber'>{n}</button>
                            })}
                        </div>
                    </div>
                    <div className="mb-2">
                        <p className="text-white ">အကွက် ၂၀ရွေး</p>
                        <div className="mt-4 d-flex gap-3 justify-content-center flex-wrap align-items-center">
                            {kwat20.map((n) => {
                                return <button key={n} className='amyanChooseNumber'>{n}</button>
                            })}
                        </div>
                    </div>
*/}