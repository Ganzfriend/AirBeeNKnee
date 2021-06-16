import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';

import styles from '../../styles.js';

// import './fashion.css';
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
        <span
          onClick={handleOpen}
          className={classes.marqueeReadDescriptionButton}
        >
        <b><u>read more</u></b>
        </span>
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
