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

const axios = require('axios');
const useStyles = makeStyles(styles);

const Marquee = ({ id = 1}) => {
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
    getListingFromServer(id);
  }, [id]);

  return (
    <div>
      {!!displayRecord && (
      <div className={classes.marqueeApp}>
        <Title listing={displayRecord} />
        <PhotoGrid listing={displayRecord} />
        <Divider />
        <Policies listing={displayRecord} />
        <Divider />
        <Description listing={displayRecord} />
        <Divider />
        <Sleeping listing={displayRecord} />
        <Divider />
        <Amenities listing={displayRecord} />
      </div>)}
    </div>
  );
};

export default Marquee;
