import React from 'react'
import { Link } from 'react-router-dom'

import 'styles/shared/Card.css'

function Card({to, thumbnail, styles}) {
  return (
    <div className="card-container" style={styles}>
      <Link to={to}>
        <div className="card-image"><img src={`${thumbnail.path}.${thumbnail.extension}`} alt="hero"/></div>
      </Link>
    </div>
  )
}

export default Card
