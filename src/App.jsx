import React, { useState } from 'react'
import NavBar from './componants/NavBar'
import Home from './componants/Home'
import About from './componants/About'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import NoteState from './context/Notes/NoteState'
import Alert from './componants/Alert'
import { Login } from './componants/Login'
import Signup from './componants/Signup'


export default function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  return (
    <NoteState>
      <Router>
        <NavBar />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home showAlert={showAlert} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path="/signup">
              <Signup showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  )
}



