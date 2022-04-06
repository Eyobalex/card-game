import React, { useContext } from 'react'
import { CardContext } from '../contexts/CardContext';
import './Cards.scss'
import CardBack from './Cards/CardBack';
import CardFront from './Cards/CardFront';
import 'animate.css';

const Cards = ({card}) => {

  
  const {flipped, setFlipped} = useContext(CardContext);

  return (
    <div className={`app__cards front`} onClick={() => setFlipped(ps => !ps)}>
        {flipped ? <CardFront card={card}/> : <CardBack />}
    </div>
  )
}

export default Cards


