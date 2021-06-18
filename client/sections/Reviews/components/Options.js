import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';

import styles from '../../../styles.js';

const useStyles = makeStyles(styles);

const Options = () => {
  const classes = useStyles();

  const [options, setOptions] = useState({});

  useEffect(() => {
    axios.get(`/rating/${1}`)
      .then(({ data }) => {
        setOptions(data);
      })
      .catch(err => console.log(err));
  }, []);

  const option = options ? options.options : null;
  return option ? (
    <div>
      <button className={classes.optBtn}>
        Central Location
        <div className={classes.buttonNum}>
          {option.centralLocation}
        </div>
      </button>
      <button className={classes.optBtn}>
        Comfortable Beds
        <div className={classes.buttonNum}>
          {option.comfortableBeds}
        </div>
      </button>
      <button className={classes.optBtn}>
        Easy Check-In
        <div className={classes.buttonNum}>
          {option.easyCheckIn}
        </div>
      </button>
      <button className={classes.optBtn}>
        Great Location
        <div className={classes.buttonNum}>
          {option.greatLocation}
        </div>
      </button>
      <button className={classes.optBtn}>
        Great Restaurants
        <div className={classes.buttonNum}>
          {option.greatRestaurants}
        </div>
      </button>
      <button className={classes.optBtn}>
        Great Views
        <div className={classes.buttonNum}>
          {option.greatViews}
        </div>
      </button>
      <button className={classes.optBtn}>
        Responsive Host
        <div className={classes.buttonNum}>
          {option.responsiveHost}
        </div>
      </button>
    </div>
  ) : <div>Loading...</div>;
};

export default Options;