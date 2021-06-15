import React, { useEffect, useState } from 'react';
import Divider from '@material-ui/core/Divider';
import PhotoGrid from './PhotoGrid.jsx';
import Title from './Title.jsx';
import Policies from './Policies.jsx';
import Description from './Description.jsx';
import Sleeping from './Sleeping.jsx';
import Amenities from './Amenities.jsx';
import './fashion.css';

const axios = require('axios');

const Marquee = () => {
  const [displayRecord, setDisplayRecord] = useState(null);

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
    getListingFromServer(1);
  }, []);

  return (
    <div className="marquee-app">
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
    </div>
  );
};

export default Marquee;
