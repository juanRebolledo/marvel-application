import React from 'react'
import { Link } from 'react-router-dom'

import {substr} from 'services/Util/Util'

import 'styles/shared/Card.css'

function Card({title, to, thumbnail, styles}) {
  return (
    <div className="card-container" style={styles}>
      <Link to={to}>
        <div className="card-title"><p>{substr(title)}</p></div>
        <div className="card-image"><img src={`${thumbnail.path}.${thumbnail.extension}`} alt="hero"/></div>
      </Link>
    </div>
  )
}

export default Card
