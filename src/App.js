import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
      <>
        <Router>
            <ul>
                <li>
                    <Link to ='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to ='/about'>
                        About
                    </Link>
                </li>
            </ul>

            <hr />
            
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
      </>
  )
}
