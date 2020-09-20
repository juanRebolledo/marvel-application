import React from 'react'
import AppLayout from 'layout/AppLayout'

import CircleLink from './components/CircleLink'
import MarvelLogo from './components/MarvelLogo'
import RigthToLeft from 'pages/PageSlide/RigthToLeft'

import 'styles/pages/home/Home.css'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <AppLayout>
      <Helmet><title>Marvel</title></Helmet>
      <RigthToLeft>
        <div className="title">
          <MarvelLogo />
        </div>
        <div className="container-circle-links">
          <CircleLink text="Personajes" to="characters"/>
          <CircleLink text="Comics" to="comics"/>
        </div>
      </RigthToLeft>
    </AppLayout>
  )
}

export default Home
