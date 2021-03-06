import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import Description from 'shared/PageContainer/components/Description/Description'
import PageContainer from 'shared/PageContainer/PageContainer'
import ContainerScroll from 'shared/ContainerScroll/ContainerScroll'

function Comic() {
  const { id } = useParams()
  const [comic, setComic] = useState(undefined)

  useEffect(() => {
    // fetch id
    fetch(`https://gateway.marvel.com/v1/public/comics/${id}?apikey=a79cdc2f1f537cac642535152f632819`)
      .then(response => response.json())
      .then(({data}) => {
        setComic(data.results[0])
      })
      .catch(error => console.log(error))
  }, [id])

  return (
    <>
      <Helmet>
        <title>Comic | {comic !== undefined && comic !== null ? comic.title : ''}</title>
      </Helmet>
      {comic !== undefined && comic !== null ?
        <PageContainer image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} title={comic.title} text={comic.title}>
          <Description description={comic.description} />
          <ContainerScroll uri={`https://gateway.marvel.com:443/v1/public/comics/${comic.id}/creators?apikey=a79cdc2f1f537cac642535152f632819`} title={`Creators of ${comic.title}`} type="creator" />
        </PageContainer>
        : null}
    </>
  )
}

export default Comic
