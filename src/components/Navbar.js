import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header>
       <nav>
        <u>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink to='/test'>Test</NavLink>
            </li>
        </u>
       </nav>
    </header>
  )
}

export default Navbar