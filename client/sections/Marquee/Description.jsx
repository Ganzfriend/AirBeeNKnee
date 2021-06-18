import React, { useState } from 'react';
import { Modal, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import styles from '../../styles.js';

const useStyles = makeStyles(styles);

const Description = ({ listing }) => {
  const classes = useStyles();
  const { description } = listing;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!listing) {
    return null;
  }
  return (
    <div>
      <div className={classes.marqueeReadDescription}>
        {description?.substr(0, 200)}
        ...
        <Button
          onClick={handleOpen}
          // className={classes.marqueeReadDescriptionButton}
        >
          <u>Show more</u>
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className={classes.marqueeDescriptionModal}>
          <p>
            {listing ? description : '...'}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Description;
