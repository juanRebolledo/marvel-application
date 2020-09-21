import React from 'react'

const ChangeOffset = ({ nextPage, previousPage }) => (
  <div className="offset-container">
    <button className="previous" onClick={previousPage}>Previous page</button>
    <button className="next" onClick={nextPage}>Next page</button>
  </div>
)


export default ChangeOffset
