import React, { useState } from 'react'
// import './App.css'
import NavBar from './componants/NavBar'
import Home from './componants/Home'
import About from './componants/About'

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'


export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  )
}



