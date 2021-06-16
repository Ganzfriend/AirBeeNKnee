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

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <div className="marquee-photo-modal">
      <button className="marquee-photo-modal-back-button" onClick={handleClose}><ArrowBackIosIcon /></button>
      <GridList className="marquee-photo-modal-gridlist" cols={1} cellHeight={400}>
        {
          photosList.map( (imgName) => (
            <GridListTile cols={1}>
              <img src={imgName} />
            </GridListTile>
          ))
        }
      </GridList>
    </div>
  );

  return (
    <div className="photo-grid">
      {!!photosList?.length && (
        <div>
          <img alt="" className="main-photo-item" src={photosList[0]} />
          <img alt="" className="photo-item item-a" src={photosList[1]} />
          <img alt="" className="photo-item item-b" src={photosList[2]} />
          <img alt="" className="photo-item item-c" src={photosList[3]} />
          <img alt="" className="photo-item item-d" src={photosList[4]} />
          <button className="photo-button" onClick={handleOpen}> Show all photos </button>
          <Modal open={open} onClose={handleClose}>
            {modalBody}
          </Modal>
        </div>
      )}
    </div>
  );
};

export default PhotoGrid;
