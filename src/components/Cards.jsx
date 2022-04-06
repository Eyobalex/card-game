import React, { useContext, useEffect, useState } from 'react'
import { CardContext } from '../contexts/CardContext';
// import Card from './Card/Card';
import './Cards.scss'
import CardBack from './Cards/CardBack';
import CardFront from './Cards/CardFront';
import 'animate.css';

const Cards = ({card}) => {


  // console.log('not workking', card);
  
  const {flipped, setFlipped} = useContext(CardContext);
  
  
  // const [flipped, setFlipped] = useState(false);


  return (
    <div className={`app__cards front`} onDoubleClick={() => setFlipped(ps => !ps)}>
        {/* {flipped.toString()} */}

        {flipped ? <CardFront card={card}/> : <CardBack />}



    </div>

    // <div className="app__cards">
    //   {flipped ? <CardFront card={card} /> : <CardBack />}
    // </div>
  )
}

export default Cards


