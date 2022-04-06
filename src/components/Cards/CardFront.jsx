import React from 'react'
import './CardFront.scss';
const CardFront = ({card}) => {
  return (
    <div className="animate__animated animate__tada card" style={{color: card.getColor()}}>
    <div className="top-item">
      <span className="val">{card.displayName && (card.displayName)}</span>
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
      <span className="val">{card.displayName && (card.displayName)}</span>
      {card.symbol === "&diams;" &&  <span className="rank">&diams;</span>}
      {card.symbol === "&hearts;" &&  <span className="rank">&hearts;</span>}
      {card.symbol === "&clubs;" &&  <span className="rank">&clubs;</span>}
      {card.symbol === "&spades;" &&  <span className="rank">&spades;</span>}
    </div>
    
    
  </div>
  )
}

export default CardFront