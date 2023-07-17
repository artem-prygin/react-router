import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { Outlet } from 'react-router';
import { getVan } from '../../api/api';
import { activeStyles } from '../../constants/constants';
import { requireAuth } from '../../utils/utils';

export async function loader({ params }) {
  await requireAuth();
  return getVan(params.id);
}

function HostVansOutlet() {
  const vanDetails = useLoaderData();

  return (
      <section>
        <Link to=".."
              relative="path"
              className="back-button">&larr; <span>Back to all vans</span></Link>

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
          <Outlet context={{ vanDetails }} />
        </div>
      </section>
  );
}

export default HostVansOutlet;
