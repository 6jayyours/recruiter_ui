import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Adminside from '../../Components/Adminside/Adminside';
import Footer from '../../Components/Footer/Footer';
import Recruiter from '../../Components/Tables/RecruiterTable/Recruiter';
import './Adminrecruiter.css'

function Adminuser() {
 return (
    <div className="admin-recruiter-container">
      <Navbar />
      <div className="admin-content">
        <Adminside />
        <div className="admin-sidebarr">
        </div>
        <div className="admin-main">
          <Recruiter />
        </div>
      </div>
      <Footer />
    </div>
 );
}

export default Adminuser;
