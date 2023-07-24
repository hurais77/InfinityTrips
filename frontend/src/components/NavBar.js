import React from 'react'
import logo from '../assets/images/logo.png'
import '../assets/css/Generic.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const logout = () =>
  {
    localStorage.removeItem('isLoggedIn')
  }
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid">
  <h1 className='navbar-title'><Link to='/home'>INFINITY{' '}<img src={logo} alt="" className="d-inline-block align-text-top"  style={{'height':'7vmin','width':'4min'}}/> TRIPS</Link></h1>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto" style={{'fontSize':'3vh', 'fontFamily':'arial'}} >
        <Link className="nav-link active" aria-current="page" href="#">Home</Link>
        <Link className="nav-link" onClick={logout}>Log Out</Link>
      </div>
    </div>
  </div>
</nav>
  )
}
