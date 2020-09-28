import React from 'react'

const Body = ({ children, text }) => (
  <div className="data-content">
    <div className="data-content-title">
      <h4>{text}</h4>
    </div>
    <div className="data-content-data">
      {children}
    </div>
  </div>
)


export default Body
