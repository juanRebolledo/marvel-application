import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import PageContainer from 'shared/PageContainer/PageContainer'
import Description from 'shared/PageContainer/components/Description/Description'
import ContainerScroll from 'shared/ContainerScroll/ContainerScroll'

function Character() {
  const { id } = useParams()
  const [character, setCharacter] = useState(undefined)

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters/${id}?apikey=a79cdc2f1f537cac642535152f632819`)
      .then(response => response.json())
      .then(({ data }) => {
        setCharacter(data.results[0])
      })
      .catch(error => console.log(error))
  }, [id])

  return (
    <>
      <Helmet><title>{character ? character.name : 'Loading'}</title></Helmet>
      {character !== undefined && character !== null ?
        <PageContainer image={`${character.thumbnail.path}.${character.thumbnail.extension}`} title={character.name} text={character.name}>
          <Description description={character.description} />
          <ContainerScroll title={`Comics of ${character.name}`} type="comic" uri={`https://gateway.marvel.com/v1/public/characters/${character.id}/comics?apikey=a79cdc2f1f537cac642535152f632819`} />
        </PageContainer>
        : null}
    </>
  )
}

export default Character
