import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Jobs from '../../Components/Jobs/Jobs'

function Joblist() {
  return (
    <div className='joblist'>
      <Navbar />
      <Jobs/>
      <Footer />
    </div>
  )
}

export default Joblist
