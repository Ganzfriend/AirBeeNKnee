import React from 'react';
import { Skeleton } from '@material-ui/lab';
import StarIcon from '@material-ui/icons/Star';

const Title = ({ listing }) => {
  const { title, rating, location } = listing;
  if (!listing) {
    return ( <Skeleton variant="text" /> );
  }
  return (
    <div>
      <h2>{title}</h2>
        <h4>
        <StarIcon fontSize="small" style={{color: "#FF385C" }} />
          {rating}
          -
          {location}
        </h4>
    </div>
  );
};

export default Title;
