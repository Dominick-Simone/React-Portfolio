import React from 'react';
import "../styles/navigation.css"
import Resume from "../images/Resume.pdf"
const Navbar = ({ handlePageChange }) => {

  return (
    <ul>
      <a className="linkStyles" href="#Home"
        onClick={() => handlePageChange('Home')}><li className="navigationStyles">Work</li></a>
      <a className="linkStyles" href="#About"
        onClick={() => handlePageChange('About')}><li className="navigationStyles">About Me</li></a>
      <a className="linkStyles" href="#Contact"
        onClick={() => handlePageChange('Contact')}><li className="navigationStyles"> Contact</li></a>
      <a href={Resume} target="_blank" className="linkStyles"><li className="navigationStyles">Resume</li></a>
    </ul>
  )
}

export default Navbar
