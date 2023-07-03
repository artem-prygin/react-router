import { useOutletContext } from 'react-router';

function HostVansDetails() {
  const vanDetails = useOutletContext();

  return (
      <section className="host-van-detail-info">
        <h4>Name: <span>{vanDetails.name}</span></h4>
        <h4>Category: <span>{vanDetails.type}</span></h4>
        <h4>Description: <span>{vanDetails.description}</span></h4>
        <h4>Visibility: <span>Public</span></h4>
      </section>
  );
}

export default HostVansDetails;
