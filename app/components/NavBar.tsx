import React from 'react'
import Image from 'next/image';
import './NavBar.css';

const NavBar = () => {
  return (
      <nav className='nav--bar'>
        <Image src="/logo.png" alt="logo" width={100} height={100} priority/>
        <ul>  
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default NavBar
