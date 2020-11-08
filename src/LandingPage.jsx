import React from 'react'
import './styles/LandingPage.css';
export default class LandingPage extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
        return (
            <div className="landing-container">
                <div className="headline">Display your favourite memories for the world to see. </div>
                <button className="btn-primary" onClick={_ => window.location.href = "/dashboard"}>Try now</button>

            </div>
        )
    }
  }