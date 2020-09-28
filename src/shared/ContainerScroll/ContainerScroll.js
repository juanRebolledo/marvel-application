import React, { useEffect, useState } from 'react'

import Card from 'shared/Card/Card'

import ImageDataNotFound from 'public/images/not-found.png'

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
      <h2>{title}</h2>
      <div className="container-scroll">
        {
          data !== undefined && data !== null ?
            data.length > 0 ?
              data.map(item => (
                <Card styles={{ minWidth: '240px' }} key={`${type}-${item.id}`} to={`/${type}/${item.id}`} thumbnail={item.thumbnail} title={item.title || item.name || item.fullName} />
              ))
              : <div style={{display: 'flex'}}><img alt="not found" src={ImageDataNotFound} style={{
                margin: 'auto',
                width: '200px'
              }} /></div>
            : <Loader />
        }
      </div>
    </>
  )
}

export default CharacterComics
