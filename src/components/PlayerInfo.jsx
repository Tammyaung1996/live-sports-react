import React from 'react'
import wallet from '../assets/img/wallet.png';
const PlayerInfo = () => {
    return (
        <div className='mx-2 rounded-3 px-2 py-2 playerInfo d-flex justify-content-between align-items-center'>
            <div>
                <small>လက်ကျန်ငွေ ( ကျပ်)</small>
                <p className="playerPrice">
                    123,456.00
                </p>
            </div>
            <div className='py-2 px-3 rounded-2 d-flex align-items-center gap-2 playerWalletContainer'  >
                <img src={wallet} />
                <small className='fw-bold'>ငွေဖြည့်မည်</small>
            </div>
        </div>
    )
}

export default PlayerInfo
