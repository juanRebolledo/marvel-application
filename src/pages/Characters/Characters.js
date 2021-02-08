import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { getCharacters } from 'services/Util/API/getData'

import DataInCards from 'shared/DataInCards/DataInCards'
import HeaderBottom from 'shared/HeaderBottom/HeaderBottom'
import PageContainer from 'shared/PageContainer/PageContainer'

import 'styles/pages/characters/Characters.css'

function Characters() {
  const [characters, setCharacters] = useState(undefined)
  const [nameCharacter, setNameCharacter] = useState('')
  const [counts, setCounts] = useState({ offset: 0, total: 0 })

  useEffect(() => {
    setCharacters(undefined)
    getCharacters(setCharacters, setCounts, counts.offset, nameCharacter)
  }, [counts.offset, nameCharacter])

  const image = require('public/images/characters.jpg')

  const handlerOffset = (offset) => setCounts((prevState) => ({...prevState, offset}))

  const nextPage = () => {
    if ((counts.offset + 20) > counts.total) return handlerOffset(0)
    return handlerOffset(counts.offset + 20)
  }

  const previousPage = () => {
    if ((counts.offset + 20) > counts.total) return handlerOffset(0)
    return handlerOffset(counts.offset - 20)
  }

  const handleSearchCharacter = ({target}) => {
    const {value} = target
    setNameCharacter(value)
    handlerOffset(0)
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
