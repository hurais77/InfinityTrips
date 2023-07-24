import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/images/launch.png';
import logo from '../assets/images/logo.png';
import '../assets/css/Launch.css';
import BackgroudImage from '../components/BackgroudImage';

function Launch() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  useEffect(()=>
  {
    if(localStorage.getItem('isLoggedIn'))
    navigate('/home')
  })
  return (
    <BackgroudImage image={image}>
      <i onClick={toggleMenu} className='fa-solid fa-bars hamburger'></i>
      <ul className={(!menuOpen ? 'screenout' : 'screenin') + ' black_links'}>
        <li>
          <Link to='/login'>Log In / Sign Up</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/gallery'>Gallery</Link>
        </li>
      </ul>

      <h1 className='launch_title'>
        INFINITY{' '}
        <span>
          <img src={logo} />
        </span>{' '}
        TRIPS
      </h1>
      <h4 className='quote'>You dream, we make it a reality!</h4>
    </BackgroudImage>
  );
}
export default Launch;
