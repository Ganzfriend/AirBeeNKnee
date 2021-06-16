import React from 'react';
import { Skeleton } from '@material-ui/lab';

import './photo-grid.css';

const OBJECT_URL = 'https://destinationcapstone.sfo2.digitaloceanspaces.com/';

const PhotoGrid = ({ listing }) => {
  const { pictures } = listing;
  let photosList = [];
  if (!listing) {
    for (let i = 0; i < 5; i++) {
      photosList[i] = (<Skeleton variant="rect" />);
    }
  } else {
    // if not null, should mean we have a displayRecord to pull from
    photosList = pictures?.map((imgName) =>
      // hardcoded for jpg
      `${OBJECT_URL}${imgName}.jpg`);
  }

  return (
    <div className="photo-grid">
      {!!photosList?.length && (
        <div>
          <img alt="" className="main-photo-item" src={photosList[0]} />
          <img alt="" className="photo-item item-a" src={photosList[1]} />
          <img alt="" className="photo-item item-b" src={photosList[2]} />
          <img alt="" className="photo-item item-c" src={photosList[3]} />
          <img alt="" className="photo-item item-d" src={photosList[4]} />
        </div>
      )}
    </div>
  );
};

export default PhotoGrid;
