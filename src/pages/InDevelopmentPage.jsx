import React from 'react'
import '../styles/InDevelopmentPage.css'
export default function InDevelopmentPage() {
  return (
    <div className="dev-container">
      <div>Sorry, this page is still being developed 👷</div>
      <button className="dev-btn" onClick={(_) => (window.location.href = '/')}>
        go back home
      </button>
    </div>
  )
}
