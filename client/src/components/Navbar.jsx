import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100" data-theme='dark'>
      <div className="flex-1">
        <p className="btn btn-ghost text-xl text-white"><Link to='/'>Students CRUD</Link></p>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className='mx-1 text-white'><Link to='/'>Home</Link></li>
          <li className='mx-1 text-white'><Link to='/add'>Add Student</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar