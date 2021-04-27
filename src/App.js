import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App