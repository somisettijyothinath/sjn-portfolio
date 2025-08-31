import React from 'react';
import '../css/Header.css';  // custom CSS file

function Header() {
  return (
    <header className="header py-3 shadow-lg">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="m-0 text-gradient"><a href='#home'>SJN World</a></h1>
        <nav className="nav-links">
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#mygallery" className="nav-item">Gallery</a>
          <a href="#blog" className="nav-item">Blog</a>
          <a href="#myresume" className="nav-item">Resume</a>
          <a href="#contact" className="nav-item">Contact Me</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
