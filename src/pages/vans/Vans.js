import { Await, defer, Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api/api';
import { Suspense } from 'react';

export const loader = () => {
  return defer({ vans: getVans() });
};

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vanType = searchParams.get('type');
  const loaderData = useLoaderData();

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={loaderData.vans}>
            {(vans) => {
              const vanElements = vans
                  .filter(van => !vanType || van.type === vanType)
                  .map(van => (
                      <div key={van.id}
                           className="van-tile">
                        <Link to={van.id}
                              state={{ searchParams: `?${searchParams.toString()}` }}>
                          <img src={van.imageUrl}
                               alt={van.name} />
                          <div className="van-info">
                            <h3>{van.name}</h3>
                            <p>${van.price}<span>/day</span></p>
                          </div>
                          <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        </Link>
                      </div>
                  ));

              return (
                  <>
                    <div className="van-list-filter-buttons">
                      <button onClick={() => handleFilterChange('type', 'simple')}
                              className={`van-type simple ${vanType === 'simple' ? 'selected' : ''}`}>Simple
                      </button>
                      <button onClick={() => handleFilterChange('type', 'luxury')}
                              className={`van-type luxury ${vanType === 'luxury' ? 'selected' : ''}`}>Luxury
                      </button>
                      <button onClick={() => handleFilterChange('type', 'rugged')}
                              className={`van-type rugged ${vanType === 'rugged' ? 'selected' : ''}`}>Rugged
                      </button>
                      {vanType ? (
                          <button onClick={() => handleFilterChange('type', null)}
                                  className="van-type clear-filters">Clear filter</button>
                      ) : null}
                    </div>

                    <div className="van-list">
                      {vanElements}
                    </div>
                  </>
              );
            }}
          </Await>
        </Suspense>
      </div>
  );
}

export default Vans;
