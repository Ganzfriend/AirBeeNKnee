import React from 'react';
import { Skeleton } from '@material-ui/lab';
import StarIcon from '@material-ui/icons/Star';

const Title = ({ listing }) => {
  const { title, rating, location } = listing;
  if (listing === null) { // skeletons
    return (<Skeleton variant="text" />);
  } // should have a record available
  return (
  // use react fragment here?
    <div>
      <h2>{title}</h2>
      <h3>
        <StarIcon />
        {rating}
        -
        {location}
      </h3>
    </div>
  );
};

export default Title;
