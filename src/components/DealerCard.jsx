import React, { useContext, useEffect, useState } from 'react'
import { CardContext } from '../contexts/CardContext';
// import Card from './Card/Card';
import './Cards.scss'
import CardBack from './Cards/CardBack';


const DealerCard = ({card}) => {


  // console.log('not workking', card);
  
  // const {flipped, setFlipped} = useContext(CardContext);
  
  
  const [flipped, setFlipped] = useState(true);


  return (
    <div className={`app__cards front`} style={{color: card.getColor()}} onDoubleClick={() => setFlipped(ps => !ps)}>
        {/* {flipped.toString()} */}

        {flipped ? (
          <div className="card animate__animated animate__tada">
          <div className="top-item">
            <span className="val">{ card.displayName ? card.displayName : "A"}</span>
            {card.symbol === "&diams;" &&  <span className="rank">&diams;</span>}
            {card.symbol === "&hearts;" &&  <span className="rank">&hearts;</span>}
            {card.symbol === "&clubs;" &&  <span className="rank">&clubs;</span>}
            {card.symbol === "&spades;" &&  <span className="rank">&spades;</span>}
          </div>
          
          <div className="center">
          {card.symbol === "&diams;" &&  <span className="rank">&diams;</span>}
      {card.symbol === "&hearts;" &&  <span className="rank">&hearts;</span>}
      {card.symbol === "&clubs;" &&  <span className="rank">&clubs;</span>}
      {card.symbol === "&spades;" &&  <span className="rank">&spades;</span>}
          </div>
          
          <div className="bottom-item">
            <span className="val">{ (card.displayName) ? card.displayName : "A" }</span>
            {card.symbol === "&diams;" &&  <span className="rank">&diams;</span>}
      {card.symbol === "&hearts;" &&  <span className="rank">&hearts;</span>}
      {card.symbol === "&clubs;" &&  <span className="rank">&clubs;</span>}
      {card.symbol === "&spades;" &&  <span className="rank">&spades;</span>}
          </div>
          
          
        </div>
        ): <CardBack />}



    </div>
  )
}

export default DealerCard


