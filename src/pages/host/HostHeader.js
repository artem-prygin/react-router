import { NavLink } from 'react-router-dom';
import React from 'react';
import { activeStyles } from '../../constants/constants';

function HostHeader() {
  return (
      <nav className="host-nav">
        <NavLink style={({ isActive }) => isActive ? activeStyles : null}
                 end
                 to="/host">Dashboard</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeStyles : null}
                 end
                 to="/host/income">Income</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeStyles : null}
                 to="/host/vans">Vans</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeStyles : null}
                 end
                 to="/host/reviews">Reviews</NavLink>
      </nav>
  );
}

export default HostHeader;
