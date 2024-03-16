import React from 'react'
import { Link } from 'react-router-dom'
import './Navbut.css'
import { useSelector } from 'react-redux';

export default function Navbut({ onClick }) {

  const { token } = useSelector(state => state.user);

  const handleLogout = () => {
    // dispatch(logoutUser()); // Dispatch the logout action
    // Optionally, redirect the user to the login page
    // You might need to use useHistory from react-router-dom for this
 };

  return (

    <div>
      {!token ? (
        <Link to="/login"> {/* Adjust the route as necessary */}
          <button className='btn' onClick={onClick}>Login / Register</button>
        </Link>
      ) : (
        <Link to="/profile"> {/* Adjust the route as necessary */}
        <img className='profile-img'></img>
        </Link>
      )}
    </div>

  )
}
