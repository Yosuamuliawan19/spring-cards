import React from 'react'


function Dots(){
    return (
        <div>
 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgba(0,0,0,0.4)" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="19" r="1" />
  <circle cx="12" cy="5" r="1" />
</svg>
        </div>
       
    )
}
function DeleteButton(){
    return (
        <div>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgba(0,0,0,0.4)" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
  </svg>
        </div>
    )
}

export default class DashBoard extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          shelves: [
              {name: 'CNY Cakes 🎂', img : 'https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png'},
              {name: 'Bali Trip', img : 'https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png'},
              {name: 'Trip to the UK 🇬🇧', img : 'https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png'},
              {name: 'Trip to Singapore 🇸🇬', img : 'https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png'},
              {name: 'Trip to the US 🇺🇸', img : 'https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png'},
          ],
          deletePrompt: -1, 
          editPrompt: -1,
      }
    }
    goToView(){
        window.location.href ='/create'
    }
    openDeletePrompt(item){
        this.setState({deletePrompt: item});
    }
    deleteItem(){
        var arr = this.state.shelves;
        arr.splice(this.state.deletePrompt, 1);
        console.log(this.state.deletePrompt);
        console.log(arr);
        this.setState({shelves: arr, deletePrompt: -1});
        
    }
    openEditPrompt(item){
        this.setState({editPrompt: item});
    }
    editItem(name){
        var arr = this.state.shelves;
        arr[this.state.editPrompt].name = name;
        this.setState({shelves: arr, editPrompt: -1});
    }
    
    render(){
        return (
            <div className="dashboard-container">
                <div className="dashboard-nav">
                    <div className="dashboard-title">Dashboard</div>
                    <button className="btn-primary" onClick={_ => window.location.href ='/create'}>Create new shelf</button>
                </div>
                {this.state.deletePrompt !== -1 ? <button onClick={_=>this.deleteItem()}> Delete item </button> : <></>}
                {this.state.editPrompt !== -1 ? <div>
                    <form action="javascript:void(0);">
                    <input type="text" val=""/>
                    <button type="submit"  onClick={_=>this.editItem("something")}>Edit name</button>
                    </form>
                </div> : <></>}
               
                <div className="folder-section">
                    {
                        this.state.shelves.map((data, id) => {
                            // console.log(id)
                            return (
                            <div key={id} className="folder-container">
                                <div onClick={_ => this.goToView()} style={{background:`url(${data.img})`}}  className="folder" >
                                </div>
                                <div className="folder-name">{data.name}
                                <div className="action-icons">
                                    <div onClick={_=>this.openEditPrompt(id)}><Dots/></div>
                                    <div  onClick={_=>this.openDeletePrompt(id)}><DeleteButton/></div>
                                    
                                </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
                <div className="showcase"></div>
            </div>
        )
    }
  }