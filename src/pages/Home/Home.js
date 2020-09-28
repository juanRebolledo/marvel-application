import React from 'react'
import { Helmet } from 'react-helmet'

import AppLayout from 'layout/AppLayout'
import CircleLink from './components/CircleLink'
import MarvelLogo from './components/MarvelLogo'
import SlideTo from 'pages/PageSlide/SlideTo'

import 'styles/pages/home/Home.css'

function Home() {
  return (
    <AppLayout>
      <Helmet><title>Marvel</title></Helmet>
      <SlideTo>
        <div className="home-container">
          <div className="title">
            <MarvelLogo />
          </div>
          <div className="container-circle-links">
            <CircleLink text="Personajes" to="characters"/>
            <CircleLink text="Comics" to="comics"/>
          </div>
        </div>
      </SlideTo>
    </AppLayout>
  )
}

export default Home
