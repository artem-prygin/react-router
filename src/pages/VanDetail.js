import { useLocation, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function VanDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans));
  }, [id]);

  const getVansFilterName = () => {
    const vanType = new URLSearchParams(location.state.searchParams).get('type');
    return vanType || 'all';
  };

  return (
      <div className="van-detail-container">
        <Link to={`..${location.state.searchParams || ''}`}
              relative="path"
              className="back-button">&larr; <span>Back to {getVansFilterName()} vans</span></Link>

        {van ? (
            <div className="van-detail">
              <img src={van.imageUrl}
                   alt={van.name} />
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
              <h2>{van.name}</h2>
              <p className="van-price"><span>${van.price}</span>/day</p>
              <p>{van.description}</p>
              <button className="link-button">Rent this van</button>
            </div>
        ) : <h2>Loading...</h2>}
      </div>
  );
}

export default VanDetail;
