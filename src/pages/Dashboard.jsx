import React from 'react'


function Dots(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgba(0,0,0,0.4)" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="19" r="1" />
  <circle cx="12" cy="5" r="1" />
</svg>
    )
}
export default class DashBoard extends React.Component {
    constructor(props){
      super(props);
    }
    goToView(){
        window.location.href ='/create'
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
                        <div onClick={_ => this.goToView()} style={{background:`url(${"https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png"})`}}  className="folder" >
                        </div>
                        <div className="folder-name">CNY Cakes 🎂<Dots/></div>
                       
                    </div>
                    <div className="folder-container">
                        <div onClick={_ => this.goToView()} style={{background:`url(${"https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png"})`}}  className="folder" >
                        </div> 
                        <div className="folder-name">Bali Trip<Dots/></div>
                    </div>
                    <div className="folder-container">
                        <div onClick={_ => this.goToView()} style={{background:`url(${"https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png"})`}}  className="folder" >
                        </div>
                        <div className="folder-name">Trip to the UK 🇬🇧 <Dots/></div>
                    </div>
                    <div className="folder-container">
                        <div onClick={_ => this.goToView()} style={{background:`url(${"https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png"})`}}  className="folder" >
                        </div>
                        <div className="folder-name">Trip to Singapore 🇸🇬  <Dots/></div>
                    </div>
                    <div className="folder-container">
                        <div onClick={_ => this.goToView()} style={{background:`url(${"https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png"})`}}  className="folder" >
                        </div>
                        <div className="folder-name">Trip to the US 🇺🇸  <Dots/></div>
                    </div>

                </div>
                
                

                <div className="showcase"></div>
            </div>
        )
    }
  }