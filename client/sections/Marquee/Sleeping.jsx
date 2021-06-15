import React from 'react';
import './fashion.css';

const Sleeping = ({ listing }) => {
  const { bedrooms } = listing;
  if (!listing) {
    return null;
  }
  let roomNum = 1;
  return (
    <div>
      <h2>Sleeping arrangements</h2>
      {bedrooms?.map((bedroom) => (
        <div className="marquee-sleeping-span">
          <h3>
            Bedroom
            {roomNum++}
          </h3>
          <h6>{bedroom}</h6>
        </div>
      ))}
    </div>
  );
};

export default Sleeping;
