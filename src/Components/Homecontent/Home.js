import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <h1 className='home-title'>Find the great jobs<br /> Offer for you</h1>
      <p className='home-paragraph'>Getting a new job is never easy.<br /> Check what new jobs we have in store <br />for you on Job Stock.</p>
      <div className="home-search-container">
        <input type="text" placeholder="Search for locality, landmark, project, or builder" className="home-search-input" />
        <button className="home-search-button">Search</button>
      </div>
    </div>
  )
}

export default Home
