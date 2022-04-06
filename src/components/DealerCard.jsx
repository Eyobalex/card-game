import React, {  useState } from 'react'
import './Cards.scss'
import CardBack from './Cards/CardBack';


const DealerCard = ({card}) => {
  
  
  const [flipped, setFlipped] = useState(true);


  return (
    <div className={`app__cards front`} style={{color: card.getColor()}} onDoubleClick={() => setFlipped(ps => !ps)}>
        {flipped ? (
          <div className="card animate__animated animate__tada">
          <div className="top-item">
            <span className="val">{ card.displayName ? card.displayName : "A"}</span>
            { card.displaySymbol()}
          </div>
          
          <div className="center">
          { card.displaySymbol()}
          </div>
          
          <div className="bottom-item">
            <span className="val">{ (card.displayName) ? card.displayName : "A" }</span>
            { card.displaySymbol()}
          </div>
        </div>
        ): <CardBack />}
    </div>
  )
}

export default DealerCard


