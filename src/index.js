import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { AuthProvider } from './Auth'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

import ViewPage from './pages/app/ViewPage'
import LandingPage from './pages/LandingPage'
import InDevelopmentPage from './pages/InDevelopmentPage'

import DashBoard from './pages/app/DashboardPage'

import './styles/styles.css'

function Index() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <DashBoard />
        </Route>
        <Route exact path="/create">
          <ViewPage />
        </Route>
        <Route exact path="/devel">
          <InDevelopmentPage />
        </Route>
        <Route exact path="/">
          <Navbar />
          <LandingPage />
          <Footer />
        </Route>
      </Switch>
    </Router>
  )
}

render(<Index />, document.getElementById('root'))
