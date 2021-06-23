import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewModal from './ReviewModal.jsx';
import { Card } from 'react-bootstrap';
import Moment from 'moment';
import {makeStyles} from '@material-ui/core/styles';

import styles from '../../../styles.js';

const useStyles = makeStyles(styles);


const Review = ({ ratings, reviews, id = 1 }) => {
  const classes = useStyles();

  const [modal, setModal] = useState(false);

  return reviews !== [] ? (
    <div>
      <div className={classes.reviewsContainer}>
        <div>
          {reviews?.slice(0, 2).map(({ review }, i) => (
            <div key={i}>
              <div className={classes.reviewerTitleBar}>
                <img
                  className={classes.reviewerTitleBarImg}
                  src='https://source.unsplash.com/random/100x100/?person'
                  alt=''
                />
                <div className={classes.reviewerTitleInfo}>
                  <div className={classes.reviewTitleName} >{review.name.split(' ')[0]}</div>
                  <div className={classes.reviewTitleJoined} >{Moment(new Date(review.created_at)).format('MMMM YYYY')}</div>
                </div>
              </div>
              <div className={classes.reviewBody} >{review.body}</div>
              <br />
              <br />
            </div>
          ))}
        </div>
        <div>
          {reviews.slice(2, 4).map(({ review }) => (
            <div key={review.name}>
              <div className={classes.reviewerTitleBar}>
                <img
                  className={classes.reviewerTitleBarImg}
                  src='https://source.unsplash.com/random/100x100/?person'
                  alt=''
                />
                <div className={classes.reviewerTitleInfo}>
                  <div className={classes.reviewTitleName} >{review.name.split(' ')[0]}</div>
                  <div className={classes.reviewTitleJoined} >{Moment(new Date(review.created_at)).format('MMMM YYYY')}</div>
                </div>
              </div>
              <div className={classes.reviewBody} >{review.body}</div>
              <br />
            </div>
          ))}
        </div>
      </div>
      <button id='show-revs-btn' className={classes.showRevsBtn} onClick={() => setModal(true)}>{`Show all ${reviews.length} reviews`}</button>
      <br />
      <br />
      {!!ratings && (
        <ReviewModal ratings={ratings} reviews={reviews} show={modal} setModal={setModal} />
      )}
    </div>
  ) : <div>Loading...</div>;
};

export default Review;