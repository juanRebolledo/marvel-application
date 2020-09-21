import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import Loader from 'shared/Loader/Loader'
import PageContainer from 'shared/PageContainer/PageContainer'
import ContainerScroll from 'shared/ContainerScroll/ContainerScroll'
import DataInCards from 'shared/DataInCards/DataInCards'
import { getComics } from 'services/Util/API/getData'


function Creator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(undefined)
  const [comics, setComics] = useState(undefined)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // fetch id
    fetch(`https://gateway.marvel.com/v1/public/creators/${id}?apikey=a79cdc2f1f537cac642535152f632819`)
      .then(response => response.json())
      .then(({ data }) => {
        setCreator(data.results[0])
      })
      .catch(error => console.log(error))
    getComics(setComics, setTotal, 0, '')

  }, [id])

  return (
    <>
      <Helmet>
        <title>Creator | {creator !== undefined && creator !== null ? creator.fullName : ''}</title>
      </Helmet>
      {creator !== undefined && creator !== null ?
        <PageContainer
          image={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
          title={creator.title}
          text={`Comics ${creator.fullName}`}
        >
          <DataInCards data={comics} to="comic" />
        </PageContainer>
        : <Loader />}
    </>
  )
}

export default Creator
