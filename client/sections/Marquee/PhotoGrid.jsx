import React, { useState } from 'react';
import {Modal, Button, GridList, GridListTile} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
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
            <GridListTile cols={1} key={imgName}>
              <img src={imgName} />
            </GridListTile>
          ))
        }
      </GridList>
    </div>
  );

  return (
    <div>
      {!!photosList?.length && (
        <div className={classes.photoSection}>
          <div className={classes.photoBox}>
            <img alt="" className={classes.mainPhotoItem} src={photosList[0]} />
            <div className={classes.photoGrid}>
              <img alt="" className={classes.photoItem} src={photosList[1]} />
              <img alt="" className={classes.photoItem} src={photosList[2]} />
              <img alt="" className={classes.photoItem} src={photosList[3]} />
              <img alt="" className={classes.photoItem} src={photosList[4]} />
            </div>
          </div>
          <Button
            startIcon={<DragIndicatorIcon/>}
            className={classes.photoButton}
            onClick={handleOpen}
            variant="contained"
          >
            Show all photos
          </Button>
          <Modal open={open} onClose={handleClose}>
            {modalBody}
          </Modal>
        </div>
      )}
    </div>
  );
};

export default PhotoGrid;
