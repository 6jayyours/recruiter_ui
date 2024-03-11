import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Navbut from '../Navbut/Navbut';
import Navdrop from '../Navdrop/Navdrop';
import Loginmodal from '../Loginmodal/Loginmodal';


function Navbar() {

  const [click, setClick] = useState(false);
  const [dropdownc, setDropDownc] = useState(false);
  const [dropdownr, setDropDownr] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);


  const toggleDropdown = (setter, value) => {
    if (window.innerWidth < 960) {
      setter(false);
    } else {
      setter(value);
    }
  };

  const openModal = () => setShowModal(true); 
  const closeModal = () => setShowModal(false); 
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          RECRUITER
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'
            onMouseEnter={() => toggleDropdown(setDropDownc, true)}
            onMouseLeave={() => toggleDropdown(setDropDownc, false)}
          >
            <Link to='/candidate-home' className='nav-links' onClick={closeMobileMenu}>
              For Candidates <i className='fas fa-caret-down' />
            </Link>
            {dropdownc && <Navdrop />}
          </li>
          <li className='nav-item'
            onMouseEnter={() => toggleDropdown(setDropDownr, true)}
            onMouseLeave={() => toggleDropdown(setDropDownr, false)}
          >
            <Link to='/recruiter-home' className='nav-links' onClick={closeMobileMenu}>
              For Recruiter <i className='fas fa-caret-down' />
            </Link>
            {dropdownr && <Navdrop />}
          </li>
          <li className='login-signup'>
          {/* <Navbut onClick={openModal} /> */}
            <Link to='/login' className='nav-links-mobile' onClick={(e) => { e.preventDefault(); openModal(); }}>
              Login / Register
            </Link>
          </li>
        </ul>
        <Navbut onClick={openModal} />
      </nav>
      {showModal && <Loginmodal onClose={closeModal} />}
    </>
  )
}


export default Navbar
