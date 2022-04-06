import React from 'react'
import './CardFront.scss';
const CardFront = ({card}) => {
  return (
    <div className="animate__animated animate__tada card" style={{color: card.getColor()}}>
    <div className="top-item">
      <span className="val">{card.displayName && (card.displayName)}</span>
      {card.displaySymbol()}
    </div>
    
    <div className="center">
      {card.displaySymbol()}
    </div>
    
    <div className="bottom-item">
      <span className="val">{card.displayName && (card.displayName)}</span>
      {card.displaySymbol()}
    </div>
    
    
  </div>
  )
}

export default CardFront