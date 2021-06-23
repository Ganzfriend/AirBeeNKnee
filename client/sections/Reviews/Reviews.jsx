import React, { useState, useEffect } from 'react';
import Options from './components/Options';
import Review from './components/Review';
import StarReview from './components/StarReview';
import Title from './components/TitleBar.jsx';
import {makeStyles} from '@material-ui/core/styles';

import styles from '../../styles.js';

const useStyles = makeStyles(styles);

const axios = require('axios');

const Reviews = ({id = 1}) => {
  const classes = useStyles();

  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState({});

  const getReviews = () => {
    axios.get('/review')
      .then((res) => setReviews(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {getReviews()}, []);

  useEffect(() => {
    axios.get(`/rating/${id}`)
      .then(({ data }) => setRatings(data))
      .catch(err => console.log(err));
  }, [id]);

  return (
      <div id="reviews-body" className={classes.reviewsBody}>
        <br />
        <hr />
        <Title ratings={ratings} />
        <br />
        <StarReview id={id} />
        <br />
        <Options id={id} />
        <br /><br />
        <Review ratings={ratings} reviews={reviews} id={id} />
      </div>
    );
};

export default Reviews;