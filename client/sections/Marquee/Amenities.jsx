import React from 'react';
import KitchenIcon from '@material-ui/icons/Kitchen';
import WifiIcon from '@material-ui/icons/Wifi';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import HotTubIcon from '@material-ui/icons/HotTub';
import TvIcon from '@material-ui/icons/Tv';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import {makeStyles} from '@material-ui/core/styles';

import styles from '../../styles.js';

const useStyles = makeStyles(styles);


const Amenities = ({ listing }) => {
  const classes = useStyles();

  const { amenities } = listing;
  const amenitiesLookup = {
    hottub: (<h4 className={classes.amenities}>
      <HotTubIcon />
      Hot Tub
    </h4>),
    kitchen: (<h4 className={classes.amenities}>
      <KitchenIcon />
      Kitchen
    </h4>),
    wifi: (<h4 className={classes.amenities}>
      <WifiIcon />
      WiFi
    </h4>),
    coffee: (<h4 className={classes.amenities}>
      <FreeBreakfastIcon />
      Coffee Maker
    </h4>),
    tv: (<h4 className={classes.amenities}>
      <TvIcon />
      T.V.
    </h4>),
    fireplace: (<h4 className={classes.amenities}>
      <FireplaceIcon />
      Fireplace
    </h4>),
    gym: (<h4 className={classes.amenities}>
      <FitnessCenterIcon />
      Gym
    </h4>),
  };

  if (!listing) {
    return null;
  }
  return (
    <div>
      <h2>What this place offers</h2>
      {amenities?.map((amen, i) => (
        <span key={i}>
          {amenitiesLookup[amen]}
        </span>
      ))}
    </div>
  );
};

export default Amenities;
