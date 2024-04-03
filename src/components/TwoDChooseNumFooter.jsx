import React from 'react'

const TwoDChooseNumFooter = () => {
    return (
        <div style={{ zIndex: 9999 }} className='py-3  chooseNumFooter position-fixed bottom-0 left-0 right-0' >
            <button className=" chooseNumDelBtn py-2 px-4 rounded-3">ဖျက်မည်</button>
            <button className=" chooseNumBetBtn py-2 px-4 rounded-3">ထိုးမည်</button>

        </div>
    )
}

export default TwoDChooseNumFooter
