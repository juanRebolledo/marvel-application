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
    <div className="container-scroll">
      <h2>{title}</h2>
      <div className="container-scroll-cards">
        {
          data ?
            data.length > 0 ?
              data.filter((item) => !item.thumbnail.path.includes("image_not_available"))
                .map(item => (
                  <Card 
                    key={`${type}-${item.id}`} to={`/${type}/${item.id}`}
                    styles={{ minHeight: '92%', minWidth: '240px' }}
                    thumbnail={item.thumbnail}
                    title={item.title || item.name || item.fullName}
                  />
                ))
              : <p>No hay información para mostrar</p>
            : <Loader />
        }
      </div>
    </div>
  )
}

export default CharacterComics
