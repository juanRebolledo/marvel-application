import React from 'react'

const Description = ({ description }) => (
  <div className="description">
    <p style={!description ? { textAlign: 'center' } : {}}>
      {!description ? "Lo sentimos, aún no hay información para mostrar" : description}
    </p>
  </div>
)

export default Description
