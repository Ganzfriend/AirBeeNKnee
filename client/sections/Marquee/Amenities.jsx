import React from 'react';
import KitchenIcon from '@material-ui/icons/Kitchen';
import WifiIcon from '@material-ui/icons/Wifi';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import HotTubIcon from '@material-ui/icons/HotTub';
import TvIcon from '@material-ui/icons/Tv';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const Amenities = ({ listing }) => {
  const { amenities } = listing;
  const amenitiesLookup = {
    hottub: (<h4>
      <HotTubIcon />
      Hot Tub
    </h4>),
    kitchen: (<h4>
      <KitchenIcon />
      Kitchen
    </h4>),
    wifi: (<h4>
      <WifiIcon />
      WiFi
    </h4>),
    coffee: (<h4>
      <FreeBreakfastIcon />
      Coffee Maker
    </h4>),
    tv: (<h4>
      <TvIcon />
      T.V.
    </h4>),
    fireplace: (<h4>
      <FireplaceIcon />
      Fireplace
    </h4>),
    gym: (<h4>
      <FitnessCenterIcon />
      Gym
    </h4>),
  };

  if (!listing) {
    return null;
  }
  return (
    <div>
      {amenities?.map((amen) => amenitiesLookup[amen])}
    </div>
  );
};

export default Amenities;
