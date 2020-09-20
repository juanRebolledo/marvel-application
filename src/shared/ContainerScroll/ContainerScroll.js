import React, { useEffect, useState } from 'react'

import Card from 'shared/Card/Card'

import 'shared/ContainerScroll/ContainerScroll.css'

function CharacterComics({ title, uri, type }) {
  const [data, setData] = useState(undefined)
  useEffect(() => {
    // fetch(uri).then(...).catch(...)
    fetch(uri)
      .then(response => response.json())
      .then(({ data }) => {
        setData(data.results)
      })
    //setData(uri)
  }, [uri])

  return (
    <>
      <h2>{`${title.substr(0, 30)}...`}</h2>
      <div className="container-scroll">
        {
          data !== undefined && data !== null ?
            data.length > 0 ?
            data.map(item => (
              <Card styles={{ minWidth: '240px' }} key={`${type}-${item.id}`} to={`/${type}/${item.id}`} thumbnail={item.thumbnail} />
            ))
            : <p>No hay informacion relacionada desde el servidor</p>
            : null
        }
      </div>
    </>
  )
}

export default CharacterComics
