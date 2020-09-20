import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import DataInCards from 'shared/DataInCards/DataInCards'
import PageContainer from 'shared/PageContainer/PageContainer'

import 'styles/pages/characters/Characters.css'

function Characters() {
  const [characters, setCharacters] = useState(undefined)
  const [offset, setOffset] = useState(0)
  const [total, setTotal] = useState(undefined)

  useEffect(() => {
    fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=${offset}&apikey=a79cdc2f1f537cac642535152f632819`)
      .then(response => {
        setCharacters(response.data.results)
        setTotal(response.data.total)
      })
      .catch(error => console.log(error))
  }, [offset])

  const image = require('public/images/characters.jpg')
  const handleOffstet = () => {
    if ((offset + 20) > total) return setOffset(0)
    return setOffset(offset + 20)
  }

  return (
    <>
      <Helmet><title>Characters | Marvel</title></Helmet>    
      <PageContainer image={image} text="Characters" title="Characters">
        <DataInCards to="character" data={characters} />
      </PageContainer>
      <button onClick={handleOffstet}>Show 20 more characters</button>
    </>
  )
}

export default Characters
