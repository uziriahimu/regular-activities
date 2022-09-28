import React from 'react';
import './SingleCard.css'

const SingleCard = ({ card }) => {
    const { image, name, age, id, text, time } = card
    return (

        <div className='cards'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>{text}</p>
            <p>For Age :{age}</p>
            <p>Time required : {time}s</p>
            <button className='card-btn'>Add to list</button>
        </div>
    );
};

export default SingleCard;