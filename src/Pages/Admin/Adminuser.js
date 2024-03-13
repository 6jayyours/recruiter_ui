import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Adminside from '../../Components/Adminside/Adminside';
import Footer from '../../Components/Footer/Footer';
import Candidate from '../../Components/Tables/UserTable/Candidate';
import './Adminuser.css'; // Assuming you have a CSS file for Adminuser

function Adminuser() {
 return (
    <div className="admin-user-container">
      <Navbar />
      <div className="admin-content">
        <Adminside />
        <div className="admin-sidebarr">
        </div>
        <div className="admin-main">
          <Candidate />
        </div>
      </div>
      <Footer />
    </div>
 );
}

export default Adminuser;
