import React, { useEffect, useState } from 'react'

import Card from 'shared/Card/Card'

import 'shared/ContainerScroll/ContainerScroll.css'

function CharacterComics({title, uri, type}) {
  const [data, setData] = useState(undefined)
  useEffect(() => {
    // fetch(uri).then(...).catch(...)
    fetch(uri).then(response => {
      setData(response.data.results)
    })
    //setData(uri)
  }, [uri])
  
  return (
    <>
      <h2>{title}</h2>
      <div className="container-scroll">
        {
          data !== undefined && data !== null ?
            data.map(item => (
              <Card styles={{ minWidth: '240px' }} key={`${type}-${item.id}`} to={`/${type}/${item.id}`} thumbnail={item.thumbnail} />
            ))
            : null
        }
      </div>
    </>
  )
}

export default CharacterComics
