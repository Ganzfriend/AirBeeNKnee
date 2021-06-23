import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';

import initMap from '../gMap.js';
import styles from '../../../styles.js';

const useStyles = makeStyles(styles);

const Location = ({ id }) => {
  const classes = useStyles();

  const [isShown, setIsShown] = useState(false);
  const [location, setLocation] = useState({});

  useEffect(() => {
    axios.get(`/location/${id}`)
      .then(({ data }) => {
        setLocation(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const {
    city, state, country, desc,
  } = location;

  const query = `${city}, ${state}, ${country}`;

  useEffect(() => {
    if (city) {
      initMap(query);
    }
  }, [isShown, city]);

  let pars = [];
  if (desc) {
    pars = desc.split('\n\n').map((par) => par.split(':'));
  }

  return (
    <div>
      <hr />
      <h4 className={classes.locTitle}>Location</h4>
      <div className={classes.wrapper}>
        {!isShown && <div id="map" className={classes.map, classes.wrapperMap} />}
        <div className={classes.locNotice}>Exact location provided after booking</div>
        <div className={classes.selTransit}>
          <label htmlFor='transit'>
            <input id='transit' className={classes.transit} type='checkbox' value='Transit' />
            <div className={classes.publicTransit}>Public Transit</div>
          </label>
        </div>
      </div>
      {city && (
      <div>
        <div className={classes.locTitle}>
          <h6>{`${city}, ${state}, ${country}`}</h6>
        </div>
        <div className={classes.descPrev}>
          {desc.split(' ').slice(0, 40).join(' ')}
          ...
        </div>
      </div>
      )}
      <br />
      <button
        id='open-loc-modal'
        type='button'
        className={classes.hostButton}
        onClick={() => setIsShown(true)}
      >
        More about the location
      </button>
      <hr />
      <Modal
        show={isShown}
        onHide={() => setIsShown(false)}
        centered
        animation
        dialogClassName={classes.locModal}
      >
        <Modal.Body>
          <div className={classes.locOverlay}>
            <button
              className={classes.hostButton, classes.locOverlayBtn}
              id='close-loc-modal'
              type='button'
              onClick={() => setIsShown(false)}
            >
              {'<'}
            </button>
            <div className={classes.locInfo}>
              <div>
                <h1 className={classes.locInfoH1}>Location</h1>
                <div className={classes.locTitle}>
                  <h6>{`${city}, ${state}, ${country}`}</h6>
                </div>
                <div>
                  <div className={classes.locDesc}>
                    {pars.map((par) => (
                      par.length > 1
                        ? (
                          <div key={par}>
                            <h4>{par[0]}</h4>
                            <p>{par[1]}</p>
                          </div>
                        )
                        : (
                          <div key={par}>
                            <p>{par}</p>
                          </div>
                        )
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div id="map" className={classes.map, classes.locInfoMap}>
                  <div className={classes.locNotice, classes.locNoticeModal}>Exact location provided after booking</div>
                  <div className={classes.selTransit, classes.selTransitModal}>
                    <label htmlFor='transit'>
                      <input id='transit' className={classes.transit} type='checkbox' value='Transit' />
                      <div className={classes.publicTransit}>Public Transit</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Location;
