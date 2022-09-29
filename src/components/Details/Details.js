import React, { useState } from 'react';
import './Details.css'

const Details = ({ details }) => {
    const values = [10, 20, 30, 40, 50];
    const [breakTime, setBreakTime] = useState([]);
    console.log(breakTime)


    let totalTime = 0;
    for (const detail of details) {
        totalTime = totalTime + detail.time;

    }

    const handleBreakTime = () => {

    }
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
                    <button onClick={() => handleBreakTime()}>10s</button >
                    <button onClick={handleBreakTime}>10s</button>
                    <button onClick={handleBreakTime}>10s</button>
                    <button onClick={handleBreakTime}>10s</button>
                    <button onClick={handleBreakTime}>10s</button>
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
                    <h3></h3>
                </div>


            </div>
            <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default Details;