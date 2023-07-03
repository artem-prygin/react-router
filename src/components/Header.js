import { Link, NavLink } from 'react-router-dom';
import React from 'react';

function Header() {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
      <header>
        <Link to="/"
              className="site-logo">#Vanlife</Link>

        <nav>
          <NavLink style={({ isActive }) => isActive ? activeStyle : null}
                   to="/host">Host</NavLink>
          <NavLink style={({ isActive }) => isActive ? activeStyle : null}
                   to="/about">About</NavLink>
          <NavLink style={({ isActive }) => isActive ? activeStyle : null}
                   to="/vans">Vans</NavLink>
        </nav>
      </header>
  );
}

export default Header;
