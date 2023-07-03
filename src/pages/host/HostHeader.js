import { NavLink } from 'react-router-dom';
import React from 'react';

function HostHeader() {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
      <nav className="host-nav">
        <NavLink style={({ isActive }) => isActive ? activeStyle : null}
                 end
                 to="/host">Dashboard</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeStyle : null}
                 end
                 to="/host/income">Income</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeStyle : null}
                 to="/host/vans">Vans</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeStyle : null}
                 end
                 to="/host/reviews">Reviews</NavLink>
      </nav>
  );
}

export default HostHeader;
