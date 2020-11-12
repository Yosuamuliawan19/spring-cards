import React from 'react'

function Dots() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-dots-vertical"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="rgba(0,0,0,0.4)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="19" r="1" />
        <circle cx="12" cy="5" r="1" />
      </svg>
    </div>
  )
}
function DeleteButton() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-trash"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="rgba(0,0,0,0.4)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
      </svg>
    </div>
  )
}
function DeletePrompt(props) {
  return (
    <div className="prompt-container">
      <div className="prompt-box">
        <div className="prompt-title">Delete {props.itemName}?</div>
        <div className="prompt-desc">Are you sure you want to delete {props.itemName}? This action cannot be undone</div>
        <div className="delete-btn-section">
          <button className="delete-btn" onClick={(_) => props.deleteItem()}>
            {' '}
            Delete item{' '}
          </button>
          <button className="cancel-btn" onClick={(_) => props.closeDeletePrompt()}>
            {' '}
            Cancel{' '}
          </button>
        </div>
      </div>
    </div>
  )
}
function EditPrompt(props) {
  return (
    <div className="prompt-container">
      <div className="prompt-box">
        <div className="prompt-title">Enter new name {props.itemName}?</div>
        <form action="javascript:void(0);">
          <input type="text" val={props.itemName} />
          <div className="delete-btn-section">
            <button className="delete-btn" type="submit" onClick={(_) => props.editItem('something')}>
              {' '}
              Save{' '}
            </button>
            <button className="cancel-btn" onClick={(_) => props.closeEditPrompt()}>
              {' '}
              Cancel{' '}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function DropDown(props) {
  console.log(props.x)
  console.log(props.y)
  return (
    <div style={{ left: props.x, top: props.y }} className="drop-down">
      {props.children}
    </div>
  )
}

var MouseX, MouseY
export default class DashBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shelves: [
        {
          name: 'CNY Cakes 🎂',
          share: 'https://yosua.io',
          img: 'https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png'
        },
        {
          name: 'Bali Trip',
          share: 'https://yosua.io',
          img: 'https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png'
        },
        {
          name: 'Trip to the UK 🇬🇧',
          share: 'https://yosua.io',
          img: 'https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png'
        },
        {
          name: 'Trip to Singapore 🇸🇬',
          share: 'https://yosua.io',
          img: 'https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png'
        },
        {
          name: 'Trip to the US 🇺🇸',
          share: 'https://yosua.io',
          img: 'https://res.cloudinary.com/yosuam19/image/upload/v1604903782/polaroid/Screenshot_2020-11-09_at_13.34.47_owxptp.png'
        }
      ],
      deletePrompt: -1,
      editPrompt: -1,
      dropDown: -1,
      toast: { color: 'red', text: 'Has been deleted', show: false },
      MouseX: 0,
      MouseY: 0
    }
  }
  _onMouseMove(e) {
    MouseX = e.clientX
    MouseY = e.clientY
  }
  showToast(color, text) {
    this.setState({ toast: { color: color, text: text, show: true } })
    setTimeout((_) => {
      this.setState({ toast: { color: color, text: '', show: false } })
    }, 6000)
  }
  goToView() {
    window.location.href = '/create'
  }
  openDeletePrompt(item) {
    this.setState({ dropDown: -1 })
    this.setState({ deletePrompt: item })
  }
  openDropDown(item) {
    this.setState({ dropDown: item })
  }
  deleteItem() {
    this.showToast('rgb(219, 102, 137)', 'Deleted ' + this.state.shelves[this.state.deletePrompt].name)
    var arr = this.state.shelves
    arr.splice(this.state.deletePrompt, 1)
    this.setState({ shelves: arr, deletePrompt: -1 })
  }
  openEditPrompt(item) {
    this.setState({ dropDown: -1 })
    this.setState({ editPrompt: item })
  }
  editItem(name) {
    var arr = this.state.shelves
    arr[this.state.editPrompt].name = name
    this.setState({ shelves: arr, editPrompt: -1 })
  }

  render() {
    return (
      <div className="dashboard-container" onMouseMove={this._onMouseMove.bind(this)}>
        <div className="dashboard-nav">
          <div className="dashboard-title">Dashboard</div>
          <button className="btn-primary" onClick={(_) => (window.location.href = '/create')}>
            Create new shelf
          </button>
        </div>

        {this.state.deletePrompt !== -1 && (
          <DeletePrompt
            itemName={this.state.shelves[this.state.deletePrompt].name}
            closeDeletePrompt={(_) => this.openDeletePrompt(-1)}
            deleteItem={(_) => this.deleteItem()}
          />
        )}
        {this.state.editPrompt !== -1 && (
          <EditPrompt editItem={(name) => this.editItem(name)} closeEditPrompt={(_) => this.openEditPrompt(-1)} />
        )}

        {this.state.dropDown !== -1 && (
          <DropDown x={MouseX} y={MouseY}>
            <div>Open</div>
            <div>Share</div>
            <div>Rename</div>
            <div onClick={(_) => this.openDeletePrompt(this.state.dropDown)}>
              <DeleteButton /> Delete
            </div>
          </DropDown>
        )}

        <div
          style={{ backgroundColor: this.state.toast.color }}
          className={this.state.toast.show ? 'toast-hide toast-show ' : 'toast-hide'}>
          {this.state.toast.text}
        </div>

        <div className="folder-section">
          {this.state.shelves.map((data, id) => {
            // console.log(id)
            return (
              <div key={id} className="folder-container">
                <div onClick={(_) => this.goToView()} style={{ background: `url(${data.img})` }} className="folder"></div>
                <div className="folder-name">
                  {data.name.substr(0, 14)}
                  <div className="action-icons">
                    <div onClick={(_) => this.openDropDown(id)}>
                      <Dots />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="showcase"></div>
      </div>
    )
  }
}
