import React from 'react'

const ComicDescription = ({date, price}) => {
  return (
    <div className="description-comic">
      <p><span>Price: </span> {price ? `$${price}` : 'No hay registro de precio'}</p>
      <p><span>Date: </span>{date ? date.split('T')[0] : 'No hay registro de fecha'}</p>
    </div>
  )
}

export default ComicDescription
