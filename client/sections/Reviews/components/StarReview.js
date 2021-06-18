import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProgressBar } from 'react-bootstrap';
import StarRating from 'react-bootstrap-star-rating';
import {makeStyles} from '@material-ui/core/styles';

import styles from '../../../styles.js';

const useStyles = makeStyles(styles);


const StarReview = ({ id }) => {
  const classes = useStyles();

  const [ratings, setRatings] = useState({});

  useEffect(() => {
    axios.get(`/rating/${id}`)
      .then(({ data }) => {
        setRatings(data);
      })
      .catch(err => console.log(err));
  }, [id]);

  let categories = [];
  let catRates = [];
  if (ratings.starOptions) {
    categories = Object.keys(ratings.starOptions);
    catRates = Object.values(ratings.starOptions);
  }
  return (
    <div>
      <div className={classes.reviewsGrid}>
        <div>
          {categories.slice(0, 3).map((cat, i) => (
            <div key={cat}>
              <div className={classes.catName} key={cat}>{cat}</div>
              <div className={classes.catProgressBar}>
                <ProgressBar className={classes.catProgBarProgress} variant='custom' now={catRates[i] * 20} />
                <div className={classes.progressCount} >{catRates[i]}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {categories.slice(3).map((cat, i) => (
            <div key={cat}>
              <div className={classes.catName} key={cat}>{cat}</div>
              <div className={classes.catProgressBar}>
                <ProgressBar className={classes.catProgBarProgress} variant='custom' now={catRates[i + 3] * 20} />
                <div className={classes.progressCount} >{catRates[i + 3]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarReview;