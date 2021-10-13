import React, { useState } from 'react';
const Navbar = ({ handlePageChange }) => {

  return (
    <ul>
      <a style={linkStyles} href="#Home"
        onClick={() => handlePageChange('Home')}><li style={navigationStyles}>Work</li></a>
      <a style={linkStyles} href="#About"
        onClick={() => handlePageChange('About')}><li style={navigationStyles}>About Me</li></a>
      <a style={linkStyles} href="#Contact"
        onClick={() => handlePageChange('Contact')}><li style={navigationStyles}> Contact</li></a>
      <a href="/images/Resume.pdf" target="blank" style={linkStyles}><li style={navigationStyles}>Resume</li></a>
    </ul>
  )
}
const navigationStyles = {
  display: "inline-block",
  padding: "6px",
  margin: "5px",
  border: "2px solid #001f3f",
  backgroundColor: "#001f3f",
  borderRadius: "10%",
  color: "steelblue",
  fontWeight: "900",
  fontSize: "large"
}
const linkStyles = {
  textDecoration: "none",
  color: "steelblue"
}
export default Navbar
