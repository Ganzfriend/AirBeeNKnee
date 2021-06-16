import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Marquee from './sections/Marquee/Marquee.jsx';
import HostInfo from './sections/Host-Info/components/HostInfo.jsx';
import Reviews from './sections/Reviews/Reviews.jsx';
import RelatedInfo from './sections/Related-Info/RelatedInfo.jsx';
import styles from './styles.js';

const useStyles = makeStyles(styles);

const App = () => {

  const classes = useStyles();

  return (
    <div className={classes.appBody}>
      <Marquee />
      <HostInfo />
      <Reviews />
      <RelatedInfo />
    </div>
  )
};

export default App;
