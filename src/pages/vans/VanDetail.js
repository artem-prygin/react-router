import { useLocation } from 'react-router';
import { Link, useLoaderData } from 'react-router-dom';
import { getVan } from '../../api/api';

export function loader({ params }) {
  return getVan(params.id);
}

function VanDetail() {
  const location = useLocation();
  const van = useLoaderData();

  const getVansFilterName = () => {
    const vanType = new URLSearchParams(location.state.searchParams).get('type');
    return vanType || 'all';
  };

  return (
      <div className="van-detail-container">
        <Link to={`..${location.state.searchParams || ''}`}
              relative="path"
              className="back-button">&larr; <span>Back to {getVansFilterName()} vans</span></Link>

        <div className="van-detail">
          <img src={van.imageUrl}
               alt={van.name} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price"><span>${van.price}</span>/day</p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      </div>
  );
}

export default VanDetail;
