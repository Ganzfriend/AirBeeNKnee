import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import KingBedIcon from '@material-ui/icons/KingBed';

import styles from '../../styles.js';

// import './fashion.css';
const useStyles = makeStyles(styles);

const Sleeping = ({ listing }) => {
  const classes = useStyles();

  const { bedrooms } = listing;
  if (!listing) {
    return null;
  }
  var roomNum = 1;
  return (
    <div>
      <h2>Sleeping arrangements</h2>
      <div className={classes.marqueeSleepingFlexbox}>
        {bedrooms?.map((bedroom, i) => (
          <div className={classes.marqueeSleepingCard} key={i} >
            <h2><KingBedIcon /></h2>
            <h4>Bedroom {roomNum++}</h4>
            <h6>{bedroom}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sleeping;
