
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';




const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav>
      <Link to="/Home"><h2>#CarRental</h2></Link>
      <ul className="list">
        <li className={pathname === '/' ? 'active' : ''}>
          <Link to="/" className={pathname === '/' ? 'active' : ''}>Host</Link>
        </li>
        <li className={pathname === '/About' ? 'active' : ''}>
          <Link to="/About" className={pathname === '/About' ? 'active' : ''}>About</Link>
        </li>
        <li className={pathname === '/Vans' ? 'active' : ''}>
          <Link to="/Vans" className={pathname === '/Vans' ? 'active' : ''}>Vans</Link>
        </li>
        <li className={pathname === '/Sign' ? 'active' : ''}>
          <Link to="/Sign" className={pathname === '/Sign' ? 'active' : ''}>
            <img className='profile' src="./images/Profile1.png" alt="Profile" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

