import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import initMap from '../gMap.js';

const Location = () => {
  const [isShown, setIsShown] = useState(false);
  const [location, setLocation] = useState({});

  useEffect(() => {
    axios.get(`/location/${1}`)
      .then(({ data }) => {
        setLocation(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const {
    city, state, country, desc,
  } = location;

  const query = `${city}, ${state}, ${country}`;

  useEffect(() => {
    if (city) {
      console.log(query);
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
      <h4 className='loc-title'>Location</h4>
      <div id='wrapper'>
        {!isShown && <div id='map' />}
        <div className='loc-notice'>Exact location provided after booking</div>
        <div className='sel-transit'>
          <label htmlFor='transit'>
            <input id='transit' type='checkbox' value='Transit' />
            <div id='public-transit'>Public Transit</div>
          </label>
        </div>
      </div>
      {city && (
      <div>
        <div className='loc-title'>
          <h6>{`${city}, ${state}, ${country}`}</h6>
        </div>
        <div id='desc-prev'>
          {desc.split(' ').slice(0, 40).join(' ')}
          ...
        </div>
      </div>
      )}
      <br />
      <button
        id='open-loc-modal'
        type='button'
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
        dialogClassName='loc-modal'
      >
        <Modal.Body>
          <div id='loc-overlay'>
            <button
              id='close-loc-modal'
              type='button'
              onClick={() => setIsShown(false)}
            >
              {'<'}
            </button>
            <div id='loc-info'>
              <div>
                <h1>Location</h1>
                <div className='loc-title '>
                  <h6>{`${city}, ${state}, ${country}`}</h6>
                </div>
                <div>
                  <div id='loc-desc'>
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
                <div id='map'>
                  <div className='loc-notice loc-notice-modal'>Exact location provided after booking</div>
                  <div className='sel-transit sel-transit-modal'>
                    <label htmlFor='transit'>
                      <input id='transit' type='checkbox' value='Transit' />
                      <div id='public-transit'>Public Transit</div>
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