import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProgressBar } from 'react-bootstrap';
import StarRating from 'react-bootstrap-star-rating';


const StarReview = ({id = 1}) => {
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
      <div id='reviews-grid'>
        <div>
          {categories.slice(0, 3).map((cat, i) => (
            <div key={cat}>
              <div className='cat-name' key={cat}>{cat}</div>
              <div id='cat-progress-bar'>
                <ProgressBar variant='custom' now={catRates[i] * 20} />
                <div id='progress-count' >{catRates[i]}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {categories.slice(3).map((cat, i) => (
            <div key={cat}>
              <div className='cat-name' key={cat}>{cat}</div>
              <div id='cat-progress-bar'>
                <ProgressBar variant='custom' now={catRates[i + 3] * 20} />
                <div id='progress-count' >{catRates[i + 3]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarReview;