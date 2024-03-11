import React from 'react'
import {Link} from 'react-router-dom'
import './Navbut.css'

export default function Navbut({ onClick }) {
  return (
    
      <Link to='/login'>
        <button className='btn' onClick={onClick}>Login / Register</button>
      </Link>
    
  )
}
