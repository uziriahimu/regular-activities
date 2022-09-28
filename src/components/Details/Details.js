import React from 'react';
import './Details.css'

const Details = ({ details }) => {
    return (
        <div className='details'>
            <div>
                <h2>Uziria Shahadat Himu</h2>
                <p>Rajshahi</p>
                <div className='info'>
                    <p>height</p>
                    <p>height</p>
                    <p>height</p>
                </div>
            </div>
            <div>
                <h3>Add A Break</h3>
                <div className='details-btn'>
                    <button>10s</button>
                    <button>10s</button>
                    <button>10s</button>
                    <button>10s</button>
                    <button>10s</button>
                </div>
            </div>
            <div>
                <h3>Exercise Details </h3>
                <h3 className='exercise-time'>Exercise Time</h3>
                <h3>Break Time</h3>
            </div>
        </div>
    );
};

export default Details;