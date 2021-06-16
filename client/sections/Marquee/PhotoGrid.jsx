import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Skeleton } from '@material-ui/lab';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {makeStyles} from '@material-ui/core/styles';

import styles from '../../styles.js';

// import './photo-grid.css';
const useStyles = makeStyles(styles);

const OBJECT_URL = 'https://destinationcapstone.sfo2.digitaloceanspaces.com/';

const PhotoGrid = ({ listing }) => {
  const classes = useStyles();

  const { pictures } = listing;
  let photosList = [];
  if (!listing) {
    for (let i = 0; i < 5; i++) {
      photosList[i] = (<Skeleton variant="rect" />);
    }
  } else {
    photosList = pictures?.map((imgName) =>
      // hardcoded for jpg
      `${OBJECT_URL}${imgName}.jpg`);
  }

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <div className={classes.marqueePhotoModal}>
      <button className={classes.marqueePhotoModalBackButton} onClick={handleClose}><ArrowBackIosIcon /></button>
      <GridList className={classes.marqueePhotoModalGridlist} cols={1} cellHeight={400}>
        {
          photosList?.map( (imgName) => (
            <GridListTile cols={1}>
              <img src={imgName} />
            </GridListTile>
          ))
        }
      </GridList>
    </div>
  );

  return (
    <div className={classes.photoGrid}>
      {!!photosList?.length && (
        <div>
          <img alt="" className={classes.mainPhotoItem} src={photosList[0]} />
          <img alt="" className={classes.photoItem, classes.itemA} src={photosList[1]} />
          <img alt="" className={classes.photoItem, classes.itemB} src={photosList[2]} />
          <img alt="" className={classes.photoItem, classes.itemC} src={photosList[3]} />
          <img alt="" className={classes.photoItem, classes.itemD} src={photosList[4]} />
          <button className={classes.photoButton} onClick={handleOpen}> Show all photos </button>
          <Modal open={open} onClose={handleClose}>
            {modalBody}
          </Modal>
        </div>
      )}
    </div>
  );
};

export default PhotoGrid;
