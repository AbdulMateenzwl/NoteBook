import React, { useState } from 'react'
import NavBar from './componants/NavBar'
import Home from './componants/Home'
import About from './componants/About'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import NoteState from './context/Notes/NoteState'
import Alert from './componants/Alert'


export default function App() {
  return (
    <NoteState>
      <Router>
        <NavBar />
        <Alert message="This is a Alert!"/>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  )
}



