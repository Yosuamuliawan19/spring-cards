import React from 'react'
export default class DashBoard extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
        return (
            <div className="dashboard-container">
                <div className="dashboard-nav">
                    <div className="dashboard-title">Dashboard</div>
                    <button className="btn-primary" onClick={_ => window.location.href ='/create'}>Create new shelf</button>
                </div>
               
                <div className="folder-section">
                    <div className="folder-container">
                        <div style={{background:`url(${"https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png"})`}}  className="folder" >
                        </div>
                        <div className="folder-name">CNY Cakes</div>
                    </div>
                    <div className="folder-container">
                        <div style={{background:`url(${"https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png"})`}}  className="folder" >
                        </div> 
                        <div className="folder-name">CNY Cakes</div>
                    </div>
                    <div className="folder-container">
                        <div style={{background:`url(${"https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png"})`}}  className="folder" >
                        </div>
                        <div className="folder-name">CNY Cakes</div>
                    </div>
                    <div className="folder-container">
                        <div style={{background:`url(${"https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png"})`}}  className="folder" >
                        </div>
                        <div className="folder-name">CNY Cakes</div>
                    </div>
                    <div className="folder-container">
                        <div style={{background:`url(${"https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png"})`}}  className="folder" >
                        </div>
                        <div className="folder-name">CNY Cakes</div>
                    </div>

                </div>
                
                

                <div className="showcase"></div>
            </div>
        )
    }
  }