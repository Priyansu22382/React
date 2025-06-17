import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
            {/* <Link to = '/'>Home</Link> */}
            <NavLink to='/' className={({isActive}) => isActive ? "active-class" : ""}>Home</NavLink>
        </li>
        <li>
            {/* <Link to = '/about'>About</Link> */}
            <NavLink to='/about' className={({isActive}) => isActive ? "active-class" : ""}>About</NavLink>
        </li>
        <li>
            {/* <Link to = '/dashboard'>Dashboard</Link> */}
            <NavLink to='/dashboard' className={({isActive}) => isActive ? "active-class" : ""}>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
