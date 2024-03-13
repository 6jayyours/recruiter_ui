import React from 'react';
import './Post.css'
import Jobpost from '../../../Components/Jobpost/Jobpost'
import Recruiterside from '../../../Components/Recruiterside/Recruiterside';
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'

function Post() {
    return (
       <div className="recruiter-user-container">
         <Navbar />
         <div className="recruiter-content">
         <Recruiterside />
           <div className="recruiter-sidebarr">
           </div>
           <div className="recruiter-main">
           <Jobpost />
           </div>
         </div>
         <Footer />
       </div>
    );
   }
   

export default Post;
