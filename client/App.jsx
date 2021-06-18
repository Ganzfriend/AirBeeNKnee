import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Marquee from './sections/Marquee/Marquee.jsx';
import HostInfo from './sections/Host-Info/components/HostInfo.jsx';
import Reviews from './sections/Reviews/Reviews.jsx';
import RelatedInfo from './sections/Related-Info/RelatedInfo.jsx';
import TopBar from './sections/TopBar/TopBar.jsx';
import styles from './styles.js';

const useStyles = makeStyles(styles);

const App = () => {

  const classes = useStyles();

  const [listingId, setListingId] = useState(1);

  const searchListing = (value) => {
    if (parseInt(value) > 20 ) return null;
    setListingId(parseInt(value));
  };

  return (
    <div className={classes.appBody}>
      <TopBar setListingId={setListingId} searchListing={searchListing} />
      <div style={{margin: "50px 10% 0 10%"}}>
        <Marquee id={listingId} />
        <Reviews id={listingId} />
        <HostInfo id={listingId} />
      </div>
      <RelatedInfo id={listingId} />
    </div>
  )
};

export default App;
