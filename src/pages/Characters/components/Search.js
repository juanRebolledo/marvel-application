import React from 'react'

function Search({onChange}) {
  return (
    <input type="text" placeholder="Write to search something" onChange={onChange}/>
  )
}

export default Search
