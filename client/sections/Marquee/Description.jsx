import React, { useState } from 'react';
import { Modal, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import styles from '../../styles.js';

const useStyles = makeStyles(styles);

const Description = ({ listing }) => {
  const { description } = listing;
  const [open, setOpen] = useState(false);
  const classes = useStyles();

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
      <p>
        {description?.substr(0, 200)}
        ...
        <Typography
          onClick={handleOpen}
          className={classes.marqueeReadDescriptionButton}
        >
          <b><u>read more</u></b>
        </Typography>
      </p>
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
