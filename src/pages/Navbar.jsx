import React from 'react'
import '../styles/Navbar.css'
export default function Navbar() {
  return (
    <div className="nav-container">
      <img className="nav-logo" src="https://res.cloudinary.com/yosuam19/image/upload/v1611415280/polaroid/logo_vtmwdp.png" />
      <div className="nav-right-section">
        <div className="nav-item" onClick={(_) => (window.location.href = '/devel')}>
          Product
        </div>
        <div className="nav-item" onClick={(_) => (window.location.href = '/devel')}>
          About
        </div>
        <div className="nav-item" onClick={(_) => (window.location.href = '/devel')}>
          Log in
        </div>
        <div className="nav-item" onClick={(_) => (window.location.href = '/devel')}>
          Sign up
        </div>
      </div>
    </div>
  )
}
