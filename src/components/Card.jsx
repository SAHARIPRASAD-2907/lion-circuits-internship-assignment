import React, { Fragment } from 'react'
import "./card.scss"

function Card({src, title, cost}) {
  return (
    <div className="card">
    <img src={src} alt={title} />
    <footer>
      <h2>{title}</h2>
      <p>{cost}</p>
    </footer>
  </div>
  )
}

export default Card