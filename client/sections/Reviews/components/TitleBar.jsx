import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarIcon from '@material-ui/icons/Star';
import {makeStyles} from '@material-ui/core/styles';

import styles from '../../../styles.js';

const useStyles = makeStyles(styles);

const Title = ({ ratings }) => {
  const classes = useStyles();

  let total = 0;
  let average = 0;
  if (ratings.starReview) {
    const stars = Object.values(ratings.starReview);
    total = stars.reduce((m, i) => m += i, 0);
    average = Math.round(stars
      .map((n, i) => n * (i + 1))
      .reduce((m, i) => m += i, 0) / total * 100) / 100;
  }

  return (
    <div className={classes.reviewsTitleBar}>
      <br />
      <StarIcon id='rvws-star' className={classes.rvwsStar}/>
      <div id='reviews-title' className={classes.reviewsTitle}>
        { !!ratings &&
          <div>{`${average} (${total} reviews)`}</div>
        }
      </div>
    </div>
  );
};

export default Title;