import React, { useState, useEffect } from 'react';
import Options from './components/Options';
import Review from './components/Review';
import StarReview from './components/StarReview';
import Title from './components/TitleBar.jsx';

const axios = require('axios');

const Reviews = ({id = 1}) => {
  const [reviews, setReviews] = useState([]);

  const getReviews = () => {
    axios.get('/review')
      .then((res) => setReviews(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {getReviews()}, []);

  return (
      <div id="reviews-body">
        <br />
        <hr />
        <Title />
        <br />
        <StarReview />
        <br />
        <Options />
        <br /><br />
        <Review reviews={reviews} />
      </div>
    );
};

export default Reviews;