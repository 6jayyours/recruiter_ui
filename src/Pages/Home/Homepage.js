import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Home from '../../Components/Homecontent/Home'

function Homepage() {
  return (
    <div className='homepage'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default Homepage
