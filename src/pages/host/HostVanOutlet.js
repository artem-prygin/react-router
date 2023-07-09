import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { Outlet } from 'react-router';
import { getHostVans } from '../../api';
import { requireAuth } from '../../utils';

export async function loader({ params }) {
  await requireAuth();
  return getHostVans(params.id);
}

function HostVansOutlet() {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };
  const vanDetails = useLoaderData();

  return (
      <section>
        <Link to=".."
              relative="path"
              className="back-button">&larr; <span>Back to all vans</span></Link>

        {vanDetails ?
            <div className="host-van-detail-layout-container">
              <div className="host-van-detail">
                <img src={vanDetails.imageUrl}
                     alt={vanDetails.name} />
                <div className="host-van-detail-info-text">
                  <i className={`van-type van-type-${vanDetails.type}`}>
                    {vanDetails.type}
                  </i>
                  <h3>{vanDetails.name}</h3>
                  <h4>${vanDetails.price}/day</h4>
                </div>
              </div>

              <nav className="host-van-detail-nav">
                <NavLink to="."
                         end
                         style={({ isActive }) => isActive ? activeStyles : null}>
                  Details
                </NavLink>

                <NavLink to="pricing"
                         style={({ isActive }) => isActive ? activeStyles : null}>
                  Pricing
                </NavLink>

                <NavLink to="photos"
                         style={({ isActive }) => isActive ? activeStyles : null}>
                  Photos
                </NavLink>
              </nav>

              <Outlet context={vanDetails} />
            </div>
            : <h1>Loading...</h1>}
      </section>
  );
}

export default HostVansOutlet;
