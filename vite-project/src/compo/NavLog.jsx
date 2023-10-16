import React from 'react'
import { Link } from 'react-router-dom';
import '../compo/Navbar.css';

function NavLog() {
  return (
    <div className="navbar">

            <a href="/HomeLog" className='home'>WApple</a>
            <Link to="/Profil" className='btn btn-success'>Profil</Link>
            <Link to="/" className='btn btn-success'>Se Déconnecter</Link>


    </div>

  )
}

export default NavLog;