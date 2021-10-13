import React, { useState } from 'react';
const Navbar = ({ currentPage, handlePageChange }) => {

  return (
    <ul>
      <li style={navigationStyles}><a href="#Home"
        onClick={() => handlePageChange('Home')}>Home</a></li>
      <li style={navigationStyles}> <a href="#Home"
        onClick={() => handlePageChange('Home')}>My Work</a></li>
      <li style={navigationStyles}><a href="#About"
        onClick={() => handlePageChange('About')}>About Me</a></li>
      <li style={navigationStyles}> <a href="#Contact"
        onClick={() => handlePageChange('Contact')}>Contact Me</a></li>
    </ul>
  )
}
const navigationStyles = {
  display: "inline-block",
  padding: "8px",
  margin: "5px",
  border: "2px solid #001f3f",
  backgroundColor: "#001f3f",
  borderRadius: "10%",
  color: "steelblue",
  fontWeight: "bold"
}
export default Navbar
