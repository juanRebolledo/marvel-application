import React from 'react'

const PageHeader = ({ alt, image }) => (
  <>
    <div className="header-image">
      <img src={image} alt={alt} />
    </div>
  </>
)


export default PageHeader
