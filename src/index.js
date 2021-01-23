import React from 'react'
import { render } from 'react-dom'
import ViewPage from './pages/ViewPage'
import LandingPage from './pages/LandingPage'
import './styles.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import DashBoard from './pages/Dashboard'
import './styles/DashBoard.css'
import Footer from './Footer'
import { AuthProvider } from './Auth'
import Navbar from './pages/Navbar'
import InDevelopment from './pages/InDevelopment'
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
          <InDevelopment />
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
