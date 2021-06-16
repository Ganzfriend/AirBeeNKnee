import React from 'react';
import './fashion.css';

const Sleeping = ({ listing }) => {
  const { bedrooms } = listing;
  if (!listing) {
    return null;
  }
  var roomNum = 1;
  return (
    <div>
      <h2>Sleeping arrangements</h2>
      <div className="marquee-sleeping-flexbox">
        {bedrooms?.map((bedroom) => (
          <div className="marquee-sleeping-card">
            <h2><KingBedIcon /></h2>
            <h4>Bedroom {roomNum++}</h4>
            <h6>{bedroom}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sleeping;
