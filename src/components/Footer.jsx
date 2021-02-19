import React from 'react'
export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="footer-container">
        <div>Built by Yosua Muliawan</div>

        <div className="footer-cc">
          <div>Polly © 2020</div>
          <div>From Jakarta with ❤</div>
        </div>
      </div>
    )
  }
}
