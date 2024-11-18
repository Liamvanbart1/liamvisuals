import React from 'react'
import Image from 'next/image';
import './NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar = () => {
  return (
    <nav className='nav--bar'>
      <a href='/'>
        <Image src="/logo.png" alt="logo" width={100} height={100} priority/>
      </a>
      <ul>  
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
      <ul>
        <li><a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a></li>
        <li><a href="https://www.linkedin.com" target="_blank"><i className="fab fa-linkedin"></i></a></li>
        <li><a href="https://www.github.com" target="_blank"><i className="fab fa-github"></i></a></li>
      </ul>
    </nav>
  )
}

export default NavBar
