import React, { useState } from 'react';
import { Modal, InputGroup, FormControl, ProgressBar } from 'react-bootstrap';
import Moment from 'moment';
import TitleBar from './TitleBar.jsx';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from '@material-ui/core/styles';

import styles from '../../../styles.js';

const useStyles = makeStyles(styles);


const ReviewModal = ({ ratings, reviews, show, setModal }) => {
  const classes = useStyles();

  const [query, setQuery] = useState('');

  let categories = [];
  let catRates = [];
  if (ratings.starOptions) {
    categories = Object.keys(ratings.starOptions);
    catRates = Object.values(ratings.starOptions);
  }
  const regEx = new RegExp(query, 'ig');
  reviews = reviews.filter(({ review }) => review ? regEx.test(review.body) : true);
  return (
    <div>
      <Modal
        show={show}
        onHide={() => setModal(false)}
        centered
        animation
        dialogClassName={classes.rvwModal}
      >
        <div className={classes.rvwMdlClose}>
          <button type='button' onClick={() => setModal(false)}>
            <CloseIcon fontSize='small' />
          </button>
        </div>
        <Modal.Body className={classes.rvwModalContent}>
          <div className={classes.rvwMdlGrid}>
            <div>
              <TitleBar ratings={ratings} className={classes.rvwModalStars, classes.rvwModalTitle} />
              <div className={classes.rvwMdlBars}>
                <div className={classes.rvwMdlCat}>
                  {categories.map(cat => <div className={classes.rvwMdlCatDiv} key={cat}>{cat}</div>)}
                </div>
                <div className={classes.rvwMdlProgress}>
                  {catRates.map(rate => (
                    <div key={rate}>
                      <ProgressBar className={classes.rvwMdlBarsProgressBar} now={rate * 20}/>
                      <div className={classes.rvwMdlBarRtg}>{rate}</div>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              {/* Buttons */}
            </div>
            <div>
              <InputGroup id='rvw-modal-srch' className={classes.rvwModalSrch}>
                <InputGroup.Prepend>
                  <InputGroup.Text id="srch-icon" className={classes.srchIcon}><SearchIcon /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder='Search'
                  id='rvw-srch-box'
                  className={classes.rvwSrchBox}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </InputGroup>
              <div className={classes.rvwMdlReviews}>
                {reviews.map(({ review }) => (
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
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ReviewModal;
