import React from 'react'

import 'styles/shared/Loader.css'

const Loader = () =>(
  <div className="lds-container">
    <div className="lds-hourglass" />
    <h2>Loading</h2>
  </div>
)
export default Loader
