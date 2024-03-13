import React from 'react'
import './Jobs.css'

function Jobs() {
  return (
    <div className="jobMainContainer">
      <div className="jobFilterSidebar">
        <div className="jobheaderContainer"> {/* Wrap the heading and button in a container */}
          <h3>Search Filter</h3>
          <button className="clearAllButton">Clear All</button>
        </div>
        <input type="text" placeholder="Search by keywords..." className="jobSearchInput" />
        <input type="text" placeholder="Location, Zip.." className="jobLocationInput" />

        <h4>Job Categories</h4>
        {/* Dropdown for Job Categories */}
        <select className="jobCategoriesSelect">
          <option value="">Select Category</option>
          <option value="itComputers">IT Computers (62)</option>
          <option value="webDesign">Web Design (31)</option>
          {/* Add more options as needed */}
        </select>

        <h4>Job Locations</h4>
        {/* Dropdown for Job Locations */}
        <select className="jobLocationsSelect">
          <option value="">Select Location</option>
          {/* Add options based on your data */}
        </select>

        <h4>Skills</h4>
        {/* Dropdown for Skills */}
        <select className="jobSkillsSelect">
          <option value="">Select Skill</option>
          {/* Add options based on your data */}
        </select>

        <h4>Experience</h4>
        {/* Dropdown for Experience */}
        <select className="jobExperienceSelect">
          <option value="">Select Experience</option>
          {/* Add options based on your data */}
        </select>

        <h4>Job Type</h4>
        {/* Dropdown for Job Type */}
        <select className="jobTypeSelect">
          <option value="">Select Job Type</option>
          {/* Add options based on your data */}
        </select>

        <h4>Job Level</h4>
        {/* Dropdown for Job Level */}
        <select className="jobLevelSelect">
          <option value="">Select Job Level</option>
          {/* Add options based on your data */}
        </select>

        <h4>Radius in Miles</h4>
        {/* Slider for Radius in Miles */}
        <input type="range" min="1" max="100" value="50" className="jobRadiusSlider" />

        <button className="jobSearchButton">Search Jobs</button>
      </div>
      <div class="jobListing">
        <div class="jobDetails">
          <div className="jobDetails-content">
            <div className="jobType">Internship</div>
            <div className="jobImageContainer">
              <img src="" alt="Job" className="jobImage" />
            </div>
            <h2 className="jobTitle">Jr. PHP Developer</h2>
            <div className="skills">CSS3, HTML5, Javascript, Bootstrap, Jquery</div>
            <div className="salary">$5K - $8K</div>
            <div className="openings">6 Open</div>
          </div>
        </div>
        <div class="jobDetails">
          <div className="jobDetails-content">
            <div className="jobType">Internship</div>
            <div className="jobImageContainer">
              <img src="" alt="Job" className="jobImage" />
            </div>
            <h2 className="jobTitle">Jr. PHP Developer</h2>
            <div className="skills">CSS3, HTML5, Javascript, Bootstrap, Jquery</div>
            <div className="salary">$5K - $8K</div>
            <div className="openings">6 Open</div>
          </div>
        </div>
        <div class="jobDetails">
          <div className="jobDetails-content">
            <div className="jobType">Internship</div>
            <div className="jobImageContainer">
              <img src="" alt="Job" className="jobImage" />
            </div>
            <h2 className="jobTitle">Jr. PHP Developer</h2>
            <div className="skills">CSS3, HTML5, Javascript, Bootstrap, Jquery</div>
            <div className="salary">$5K - $8K</div>
            <div className="openings">6 Open</div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Jobs
