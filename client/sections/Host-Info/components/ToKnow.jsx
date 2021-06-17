import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {makeStyles} from '@material-ui/core/styles';

import Health from './Health.jsx';
import Rules from './Rules.jsx';
import ToKnowModal from './ToKnowModal.jsx';
import styles from '../../../styles.js';

const useStyles = makeStyles(styles);

const ToKnow = () => {
  const classes = useStyles();

  const [showRules, setShowRules] = useState(false);
  const [showSafety, setShowSafety] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  const [toKnow, setToKnow] = useState({});

  useEffect(() => {
    axios.get(`/toKnow/${1}`)
      .then(({ data }) => {
        setToKnow(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { rules, health, cancelPolicy } = toKnow;
  const healthTitle = 'Health & Safety';

  const openModal = (e, cb) => {
    e.preventDefault();
    cb(true);
  };

  return !rules ? <div />
    : (
      <div>
        <br />
        <div className={classes.toKnowTitle}>Things to know</div>
        <br />
        <div className={classes.toKnowGrid}>
          <div>
            <div className={classes.knowSubtitle}>House rules</div>
            <Rules rules={rules.house} />
            <a href='#' className={classes.aLoc} onClick={(e) => openModal(e, setShowRules)}>
              Show more
              <ChevronRightIcon />
            </a>
          </div>
          <div>
            <div className={classes.knowSubtitle}>{healthTitle}</div>
            <Health health={health.safety} />
            <a href='#' className={classes.aLoc} onClick={(e) => openModal(e, setShowSafety)}>
              Show more
              <ChevronRightIcon />
            </a>
          </div>
          <div>
            <div className={classes.knowSubtitle}>Cancellation policy</div>
            {cancelPolicy.map((line) => <div className={classes.rule} key={line}>{line}</div>)}
            <a href='#' className={classes.aLoc} onClick={(e) => openModal(e, setShowCancel)}>
              More details
              <ChevronRightIcon />
            </a>
          </div>
        </div>
        <br />
        <hr />
        <ToKnowModal
          whatToKnow={rules}
          show={showRules}
          close={() => setShowRules(false)}
        />
        <ToKnowModal
          whatToKnow={health}
          show={showSafety}
          close={() => setShowSafety(false)}
        />
        <ToKnowModal
          whatToKnow={cancelPolicy}
          show={showCancel}
          close={() => setShowCancel(false)}
        />
      </div>
    );
};

export default ToKnow;
