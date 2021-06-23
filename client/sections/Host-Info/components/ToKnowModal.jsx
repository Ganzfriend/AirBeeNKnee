import React from 'react';
import { Modal } from 'react-bootstrap';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

import Health from './Health.jsx';
import Rules from './Rules.jsx';
import styles from '../../../styles.js';

const useStyles = makeStyles(styles);

const ToKnowModal = ({ whatToKnow, show, close }) => {
  const classes = useStyles();

  let title = 'House rules';
  let subTitle = 'Additional rules';
  let mainShow = <Rules rules={whatToKnow.house} />;
  let subShow = <Rules rules={whatToKnow.additional} />;
  const { Body, Title } = Modal;

  if (whatToKnow.safety) {
    title = 'Health & Safety';
    subTitle = 'You must also acknowledge';
    mainShow = <Health health={whatToKnow.safety} />;
    subShow = <Health health={whatToKnow.acknowledge} />;
  }
  if (Array.isArray(whatToKnow)) {
    title = 'Cancellation Policy';
    [subTitle] = whatToKnow;
    mainShow = '';
    [, subShow] = whatToKnow;
  }

  return (
    <Modal
      show={show}
      onHide={close}
      centered
      animation
    >
      <div id="close-modal" className={classes.modalTitleAndClose}>
        <Title>{title}</Title>
        <IconButton onClick={close}>
          <CloseIcon fontSize='small' />
        </IconButton>
      </div>
      <Body className={classes.knowModalContent}>
        {mainShow}
        <div id='modal-subtitle' className={classes.modalSubtitle}>
          {subTitle}
        </div>
        {subShow}
      </Body>
    </Modal>
  );
};

export default ToKnowModal;
