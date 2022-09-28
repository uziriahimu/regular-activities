import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import SingleCard from '../SingleCard/SingleCard';
import './Card.css'

const Card = () => {
    const [cards, setCards] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
        // .then(data => console.log(data))
    }, [])
    return (
        <div>

            <div className='container'>
                <div>
                    <h1 className='title'>Yoga activities</h1>
                    <div className='card-container'>

                        {
                            cards.map(card => <SingleCard
                                key={card.id}
                                card={card}
                            ></SingleCard>)
                        }
                    </div>
                </div>
                <div className='details-container'>
                    <Details details={details}></Details>
                </div>
            </div>
        </div>


    );
};

export default Card;