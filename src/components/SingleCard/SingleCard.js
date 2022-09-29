import React from 'react';
import './SingleCard.css'

const SingleCard = ({ card, handleAddToList }) => {
    const { image, name, age, text, time } = card
    return (

        <div className='cards'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>{text}</p>
            <p>For Age :{age}</p>
            <p>Time required : {time}s</p>
            <button onClick={() => handleAddToList(card)} className='card-btn'>Add to list</button>
        </div>
    );
};

export default SingleCard;