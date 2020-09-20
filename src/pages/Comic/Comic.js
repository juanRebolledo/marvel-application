import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import ComicDescription from 'shared/PageContainer/components/Description/ComicDescription'
import Description from 'shared/PageContainer/components/Description/Description'
import PageContainer from 'shared/PageContainer/PageContainer'
import ContainerScroll from 'shared/ContainerScroll/ContainerScroll'

function Comic() {
  const { id } = useParams()
  const [comic, setComic] = useState(undefined)

  useEffect(() => {
    // fetch id
    fetch(`https://gateway.marvel.com/v1/public/comics/${id}?apikey=a79cdc2f1f537cac642535152f632819`)
      .then(response => {
        setComic(response.data.results[0])
      })
      .catch(error => console.log(error))
    //setComic(comicData.results[0])
  }, [id])

  return (
    <>
      <Helmet>
        <title>Comic | {comic !== undefined && comic !== null ? comic.title : ''}</title>
      </Helmet>
      {comic !== undefined && comic !== null ?
        <PageContainer image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} title={comic.title} text={comic.title}>
          <Description description={comic.description} />
          <ComicDescription date={comic.dates[0].date} price={comic.prices[0].price} />
          <ContainerScroll uri={comic.creators.collectionURI} title={`Creators of ${comic.title}`} type="creator" />
        </PageContainer>
        : null}
    </>
  )
}

export default Comic
