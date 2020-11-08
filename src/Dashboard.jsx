import React from 'react'
export default class DashBoard extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
        return (
            <div className="dashboard-container">
                This is the dashboard
                <button className="btn-primary" onClick={_ => window.location.href ='/create'}>Create new gallery</button>

            </div>
        )
    }
  }