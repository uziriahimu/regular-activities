import React, { useState } from 'react';
import './Details.css'
import { ToastContainer, toast } from 'react-toastify';

const Details = ({ details }) => {
    const [breaks, setBreaks] = useState(0);
    const breakTime = localStorage.getItem('break')
    const handleBreakTime = (e) => {
        localStorage.setItem('break', e)
        setBreaks(e);
    }

    let totalTime = 0;
    for (const detail of details) {
        totalTime = totalTime + detail.time;

    }


    const notify = () => toast("Congratulation! Activities are complete.")


    return (
        <div className='details'>
            <div>
                <img src="" alt="" />
                <h2>Uziria Shahadat Himu</h2>
                <p>Rajshahi</p>
                <div className='info'>
                    <div>
                        <h4>57kg</h4>
                        <p>weight</p>
                    </div>
                    <div>
                        <h4>5.3</h4>
                        <p>height</p>
                    </div>
                    <div>
                        <h4>23yrs</h4>
                        <p>age</p>
                    </div>

                </div>
            </div>
            <div>
                <h3>Add A Break</h3>
                <div className='details-btn'>
                    <button onClick={() => handleBreakTime(10)}>10s</button>
                    <button onClick={() => handleBreakTime(20)}>20s</button>
                    <button onClick={() => handleBreakTime(30)}>30s</button>
                    <button onClick={() => handleBreakTime(40)}>40s</button>
                    <button onClick={() => handleBreakTime(50)}>50s</button>
                </div>
            </div>
            <div>
                <h3>Exercise Details </h3>
                <div className='time'>
                    <h3>Exercise Time </h3>
                    <h3> {totalTime}s</h3>
                </div>
                <div className='time'>
                    <h3 >Break Time</h3>
                    <h3>{breakTime}s</h3>
                </div>


            </div>
            <button className='activity-btn' onClick={notify}>Activity Completed</button>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default Details;