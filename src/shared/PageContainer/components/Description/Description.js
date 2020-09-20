import React from 'react'

const Description = ({ description }) => (
  <div className="description">
    {
      !description
        ? <p>Lo siento :( no hay descripcion relacionada con este comic</p> 
        : <p>{description}</p>
    }
  </div>
)

export default Description
