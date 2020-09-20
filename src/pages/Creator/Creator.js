import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import PageContainer from 'shared/PageContainer/PageContainer'

function Creator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(undefined)

  useEffect(() => {
    // fetch id
    fetch(`https://gateway.marvel.com:443/v1/public/creators/${id}?apikey=a79cdc2f1f537cac642535152f632819`)
      .then(response => {
        setCreator(response.data.results[0])
      })
      .catch(error => console.log(error))
  }, [id])

  return (
    <>
      <Helmet>
        <title>Creator | {creator !== undefined && creator !== null ? creator.fullname : ''}</title>
      </Helmet>
      {creator !== undefined && creator !== null ?
        <PageContainer
          image={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
          title={creator.title}
          text={creator.title}
        />
        : null}
    </>
  )
}

export default Creator
