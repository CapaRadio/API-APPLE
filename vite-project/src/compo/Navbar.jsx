import React from 'react'
import { Link } from 'react-router-dom';
import '../compo/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">

            <a href="/" className='home'>WApple</a>
            <Link to="/Log" className='btn btn-success'>S'inscrire</Link>


    </div>

  )
}

export default Navbar;