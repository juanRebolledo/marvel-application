import React, { useEffect, useState } from 'react'

import Card from 'shared/Card/Card'

import 'shared/ContainerScroll/ContainerScroll.css'
import Loader from 'shared/Loader/Loader'

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
              <Card styles={{ minWidth: '240px' }} key={`${type}-${item.id}`} to={`/${type}/${item.id}`} thumbnail={item.thumbnail} title={item.title || item.name || item.fullName} />
            ))
            : <p>No hay informacion relacionada desde el servidor</p>
            : <Loader />
        }
      </div>
    </>
  )
}

export default CharacterComics
