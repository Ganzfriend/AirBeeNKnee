import React, { useEffect, useState } from 'react';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from '@material-ui/core/styles';

import PhotoGrid from './PhotoGrid.jsx';
import Title from './Title.jsx';
import Policies from './Policies.jsx';
import Description from './Description.jsx';
import Sleeping from './Sleeping.jsx';
import Amenities from './Amenities.jsx';

import styles from '../../styles.js';
// import './fashion.css';

const axios = require('axios');
const useStyles = makeStyles(styles);

const Marquee = () => {
  const classes = useStyles();
  const [displayRecord, setDisplayRecord] = useState({});

  const getListingFromServer = (_id = 'random') => {
    axios.get(`/api/listing/${_id}`)
      .then((response) => {
        console.log('received listing from server: ', response);
        setDisplayRecord(response.data);
      })
      .catch((error) => {
        console.log('error fetching listing from server', error);
      });
  };

  useEffect(() => {
    getListingFromServer();
  }, []);

  return (
    <div className={classes.marqueeApp}>
      {displayRecord ? (
      <div>
        <Title listing={displayRecord} />
        <PhotoGrid listing={displayRecord} />
        <div className={classes.marqueeSubmodulesDiv}>
          <Divider />
          <Policies listing={displayRecord} />
          <Divider />
          <Description listing={displayRecord} />
          <Divider />
          <Sleeping listing={displayRecord} />
          <Divider />
          <Amenities listing={displayRecord} />
        </div>
      </div>
      )
      : <div></div>
      }
    </div>
  );
};

export default Marquee;
