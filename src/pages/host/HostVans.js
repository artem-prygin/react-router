import { Await, defer, Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api/api';
import { requireAuth } from '../../utils/utils';
import { Suspense } from 'react';

export async function loader() {
  await requireAuth();
  return defer({ vans: getHostVans() });
}

function HostVans() {
  const loaderData = useLoaderData();

  return (
      <section>
        <h1 className="host-vans-title">Your listed vans</h1>

        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={loaderData.vans}>
            {(vans) => {
              const hostVansEls = vans.map(van => (
                  <Link to={van.id}
                        key={van.id}
                        className="host-van-link-wrapper">
                    <div className="host-van-single"
                         key={van.id}>
                      <img src={van.imageUrl}
                           alt={van.name} />
                      <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                      </div>
                    </div>
                  </Link>
              ));

              return <div className="host-vans-list">{hostVansEls}</div>;
            }}
          </Await>
        </Suspense>
      </section>
  );
}

export default HostVans;
