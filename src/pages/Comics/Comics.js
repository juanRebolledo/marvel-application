import React, { useEffect, useState } from 'react'

import PageContainer from 'shared/PageContainer/PageContainer'
import DataInCards from 'shared/DataInCards/DataInCards'
import { Helmet } from 'react-helmet'

function Comics() {
  const [comics, setComics] = useState(undefined)
  const [offset, setOffset] = useState(0)
  const [total, setTotal] = useState(undefined)

  useEffect(()=>{
    fetch(`https://gateway.marvel.com:443/v1/public/comics?limit=20&offset=${offset}&apikey=a79cdc2f1f537cac642535152f632819`)
      .then(response => {
        setComics(response.data.results)
        setTotal(response.data.total)
      })  
  }, [])

  const handleOffstet = () => {
    if ((offset + 20) > total) return setOffset(0)
    return setOffset(offset + 20)
  }

  const image = require('public/images/comics.jpg')
  return (
    <>
      <Helmet>
        <title>Comics</title>
      </Helmet>
      <PageContainer image={image} text="Comics">
        <DataInCards data={comics} to="comic" />
      </PageContainer>
      <button onClick={handleOffstet}>Show 20 more characters</button>
    </>
  )
}

export default Comics
