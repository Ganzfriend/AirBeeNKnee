import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
// import {makeStyles} from '@material-ui/core/styles';
import './fashion.css';

const Description = ({ listing }) => {
  const { description } = listing;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <div className="marquee-description-modal">
      <p>
        {listing ? description : '...'}
      </p>
    </div>
  );

  if (listing === null) {
    return null;
  }
  return (
    <div>
      <p>
        {description.substr(0, 200)}
        ...
        <span onClick={handleOpen}>read more</span>
      </p>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {modalBody}
      </Modal>
    </div>
  );
};

export default Description;
