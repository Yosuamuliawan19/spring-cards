import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/LandingPage.css'

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: ['memories', 'products', 'books', 'artworks'],
      currentProduct: 0
    }
  }

  componentDidMount() {
    setInterval((_) => this.setState({ currentProduct: (this.state.currentProduct + 1) % 3 }), 1500)
  }

  render() {
    return (
      <div className="landing-container">
        <div style={{ display: 'flex' }}>
          <img
            className="headline-img"
            src="https://res.cloudinary.com/yosuam19/image/upload/v1623490167/polaroid/Safari_Big_Sur_-_Light_ldpsjw.png"
          />
          <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <div className="headline">
              <div>Display your favourite</div> <div className="headline-product">{this.state.products[this.state.currentProduct]}</div>{' '}
              <div>for the world to see.</div>{' '}
            </div>
            <button className="btn-primary" onClick={(_) => (window.location.href = '/dashboard')}>
              Try now
            </button>
            <div className="free-disclaimer">Absolutely 100% free. No hidden extras</div>
          </div>
        </div>
      </div>
    )
  }
}
