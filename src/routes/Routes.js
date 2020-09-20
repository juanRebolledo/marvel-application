import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Character from 'pages/Character/Character'
import Characters from 'pages/Characters/Characters'
import Comic from 'pages/Comic/Comic'
import Comics from 'pages/Comics/Comics'
import Home from 'pages/Home/Home'
import PageNotFound from 'pages/Error/PageNotFound'
import { AnimatePresence } from 'framer-motion'
import Creator from 'pages/Creator/Creator'

export default function Routes() {
  return (
    <Route
      render={({ location }) => (
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Home} />
            <Route path="/characters" exact component={Characters} />
            <Route path="/comics" exact component={Comics} />
            <Route path="/character/:id" exact component={Character} />
            <Route path="/comic/:id" exact component={Comic} />
            <Route path="/creator/:id" exact component={Creator} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </AnimatePresence>
      )}
    />
  )
}