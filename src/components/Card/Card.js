import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import SingleCard from '../SingleCard/SingleCard';
import './Card.css'
import Blog from '../Blog/Blog';

const Card = () => {
    const [cards, setCards] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    const handleAddToList = (card) => {
        const newDetails = [...details, card];
        setDetails(newDetails)
    }
    return (
        <div>

            <div className='container'>
                <div>
                    <div className='title'>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                        </div>
                        <div><h1 >Regular activities</h1></div>

                    </div>
                    <div className='card-container'>

                        {
                            cards.map(card => <SingleCard
                                key={card.id}
                                card={card}
                                handleAddToList={handleAddToList}
                            ></SingleCard>)
                        }
                    </div>
                </div>
                <div className='details-container'>
                    <Details details={details}></Details>
                </div>
            </div>
            <Blog></Blog>
        </div>


    );
};

export default Card;