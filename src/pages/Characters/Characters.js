import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { getCharacters } from 'services/Util/API/getData'

import DataInCards from 'shared/DataInCards/DataInCards'
import HeaderBottom from 'shared/HeaderBottom/HeaderBottom'
import PageContainer from 'shared/PageContainer/PageContainer'

import 'styles/pages/characters/Characters.css'

function Characters() {
  const [characters, setCharacters] = useState(undefined)
  const [offset, setOffset] = useState(0)
  const [nameCharacter, setNameCharacter] = useState('')
  const [total, setTotal] = useState(undefined)

  useEffect(() => {
    setCharacters(undefined)
    getCharacters(setCharacters, setTotal, offset, nameCharacter)
  }, [offset, nameCharacter])

  const image = require('public/images/characters.jpg')

  const nextPage = () => {
    if ((offset + 20) > total) return setOffset(0)
    return setOffset(offset + 20)
  }

  const previousPage = () => {
    if ((offset - 20) < 0) return setOffset(0)
    return setOffset(offset - 20)
  }

  const handleSearchCharacter = ({target}) => {
    const {value} = target
    setNameCharacter(value)
    setOffset(0)
  }

  return (
    <>
      <Helmet><title>Characters | Marvel</title></Helmet>
      <PageContainer image={image} left={true} text="Characters">
        <DataInCards data={characters} to="character" />
      </PageContainer>
      <HeaderBottom search={handleSearchCharacter} nextPage={nextPage} previousPage={previousPage}/>
    </>
  )
}

export default Characters
