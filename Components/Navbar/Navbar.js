import React from 'react'
import grad from '../Images/Gratitude App.png'
import './nav.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav'>
      <i className="bi bi-columns-gap logoI logoN"></i>
      <h1 className='gradname'>Gratitude App</h1>
      <div>

      <Link to="/about" className='a' >About</Link>
      </div>
    </div>
  )
}
