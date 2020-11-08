
import React  from 'react'
import { render } from 'react-dom'
import ViewPage from './ViewPage'
import LandingPage from './LandingPage'
import './styles.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DashBoard from './Dashboard'
import './styles/DashBoard.css';
import Footer from './Footer';


function Index(){
  return (
    <Router>
        <Switch>
          <Route exact path="/dashboard" >
            
            <DashBoard />
          </Route>
          <Route exact path="/create" >
            <ViewPage/>
          </Route>
          <Route exact path="/" >
            <LandingPage />
            <Footer/>
          </Route>
        </Switch>
    </Router>
  )
}

render(<Index />, document.getElementById('root'))
