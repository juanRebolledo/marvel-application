import React from 'react'

import { substr } from 'services/Util/Util'

const Body = ({ children, text }) => (
  <div className="data-content">
    <div className="data-content-title">
      <h4>{substr(text)}</h4>
    </div>
    <div className="data-content-data">
      {children}
    </div>
  </div>
)


export default Body
