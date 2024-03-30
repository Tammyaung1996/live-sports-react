import React from 'react'
import maze from '../assets/img/maze.png';
import flash from '../assets/img/flash.png';
import repeat from '../assets/img/repeat.png';
import dream from '../assets/img/dream.png';

const TwoDChooseOption = () => {
    const options = [
        { img: maze, title: 'အခွေ' },
        { img: flash, title: 'အမြန်ရွေး' },
        { img: repeat, title: 'ပတ်လည်' },
        { img: dream, title: 'အိပ်မက်' }
    ]
    return (
        <div className='px-3 py-3 d-flex align-items-center justify-content-between'>
            {options.map((item, index) => {
                return <div key={index} className='text-center' >
                    <img src={item.img} style={{ width: '30px', height: '30px' }} />
                    <div>
                        <small style={{ color: '#5987CC' }} >{item.title}</small>
                    </div>
                </div>
            })}
        </div>
    )
}

export default TwoDChooseOption
