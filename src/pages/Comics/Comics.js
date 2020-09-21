import React, { useEffect, useState } from 'react'

import PageContainer from 'shared/PageContainer/PageContainer'
import DataInCards from 'shared/DataInCards/DataInCards'
import { Helmet } from 'react-helmet'
import { getComics } from 'services/Util/API/getData'
import HeaderBottom from 'shared/HeaderBottom/HeaderBottom'

function Comics() {
  const [comics, setComics] = useState(undefined)
  const [nameComic, setNameComic] = useState('')
  const [offset, setOffset] = useState(0)
  const [total, setTotal] = useState(undefined)

  useEffect(() => {
    getComics(setComics, setTotal, offset, nameComic)
  }, [offset, nameComic])

  const nextPage = () => {
    if ((offset + 20) > total) return setOffset(0)
    return setOffset(offset + 20)
  }

  const previousPage = () => {
    if ((offset - 20) < 0) return setOffset(0)
    return setOffset(offset - 20)
  }

  const handleSearchComic = ({target}) => {
    const {value} = target
    setNameComic(value)
    setOffset(0)
  }

  const image = require('public/images/comics.jpg')
  return (
    <>
      <Helmet>
        <title>Comics | Marvel</title>
      </Helmet>
      <PageContainer image={image} left={true} text="Comics">
        <DataInCards data={comics} to="comic" />
      </PageContainer>
      <HeaderBottom search={handleSearchComic} nextPage={nextPage} previousPage={previousPage}/>
    </>
  )
}

export default Comics
