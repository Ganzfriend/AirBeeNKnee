import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'moment';

import {makeStyles} from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import SecurityIcon from '@material-ui/icons/Security';
import { Modal, Button, Form } from 'react-bootstrap';

import Location from './Location.jsx';
import ToKnow from './ToKnow.jsx';
import styles from '../../../styles.js';

const useStyles = makeStyles(styles);

const HostInfo = ({ id = 1 }) => {
  const classes = useStyles();

  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [msgName, setMsgName] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgTopic, setMsgTopic] = useState('');
  const [msgBody, setMsgBody] = useState('');
  const [valid, setValid] = useState('');

  const [host, setHost] = useState({});
  const { Group, Label, Control } = Form;
  const { Feedback } = Control;
  const {
    Header, Body, Title, Footer,
  } = Modal;

  useEffect(() => {
    axios.get(`/hostInfo/${id}`)
      .then(({ data }) => {
        setHost(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const {
    name, desc, photo, joinDate, verified, reviews, response, _id,
  } = host;

  const toggleDesc = (e) => {
    e.preventDefault();
    setShowMore(true);
  };

  const resetState = () => {
    setMsgName('');
    setMsgEmail('');
    setMsgTopic('');
    setMsgBody('');
    setShowModal(false);
    setValid(false);
  };

  const submitMessage = (e) => {
    if (!e.currentTarget.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      setValid(true);
    } else {
      e.preventDefault();
      const body = {
        name: msgName,
        email: msgEmail,
        topic: msgTopic,
        message: msgBody,
      };
      axios.put(`/email/${_id}`, body)
        .then((res) => {
          console.log(res);
          resetState();
        })
        .catch((err) => {
          console.log(err);
          resetState();
        });
    }
  };

  return !host.name ? <div />
    : (
      <div className={classes.hostBody}>
        <Location id={id} />
        <div className={classes.hostBar}>
          <img src={photo} alt='' className={classes.hostImg} />
          <div className={classes.hostBarInfo} style={{ display: 'inline-block' }}>
            <h3 className={classes.hostName}>
              {`Hosted by ${name.split(' ')[0]}`}
            </h3>
            <div className={classes.hostJoin}>
              {`Joined in ${Moment(new Date(joinDate)).format('MMMM YYYY')}`}
            </div>
          </div>
        </div>
        <br />
        <div className={classes.hostInfo}>
          <div>
            <div className={classes.hostData}>
              <StarIcon style={{ color: 'red' }} className={classes.svg} />
              <div className={classes.reviews}>
                {`${reviews} Reviews`}
              </div>
              {verified ? <VerifiedUserIcon style={{ color: 'red' }} className={classes.svg} /> : <ReportProblemIcon style={{ color: 'red' }} className={classes.svg} />}
              <div className={classes.verified}>
                {verified ? 'Identity Verified' : 'Not Verified'}
              </div>
            </div>
            <br />
            <div className={classes.hostDesc}>
              {showMore && desc}
              {!showMore && desc.split(' ').slice(0, 25).join(' ')}
              {!showMore && '...  '}
              {!showMore && <a className={classes.aLoc} href='#' onClick={toggleDesc}>read more</a>}
            </div>
          </div>
          <div className={classes.hostContact}>
            <div>
              {`Response rate: ${response.rate}%`}
            </div>
            <br />
            <div>
              {`Response time: ${response.time}`}
            </div>
            <br />
            <button
              className={classes.hostButton}
              type='button'
              onClick={() => setShowModal(true)}
            >
              Contact host
            </button>
            <div>
              <SecurityIcon style={{ color: 'blue', display: 'inline-block' }} className={classes.svg} />
              <div className={classes.protWarning}>
                To protect your payment, never transfer
                money or communicate outside of the Destination Capstone
                website or app.
              </div>
            </div>
          </div>
          <Modal
            show={showModal}
            onHide={resetState}
            centered
            animation
          >
            <Header>
              <Title>{`Contact ${name.split(' ')[0]}!`}</Title>
            </Header>
            <Body>
              <Form noValidate validated={valid} onSubmit={submitMessage}>
                <Group controlId="validationCustom01">
                  <Label>Name: </Label>
                  <Control
                    type="text"
                    placeholder="Enter name"
                    onChange={(e) => setMsgName(e.target.value)}
                    required
                  />
                  <Feedback type='invalid'>
                    Please provide your name
                  </Feedback>
                  <Feedback type="valid">
                    Looks good!
                  </Feedback>
                </Group>
                <Group controlId="validationCustom01">
                  <Label>Email: </Label>
                  <Control
                    type="email"
                    placeholder="Enter email"
                    required
                    onChange={(e) => setMsgEmail(e.target.value)}
                  />
                  <Feedback type="invalid">
                    Please provide a valid email.
                  </Feedback>
                  <Feedback type="valid">
                    Looks good!
                  </Feedback>
                </Group>
                <Group>
                  <Label>Topic: </Label>
                  <Control as="select" required onChange={(e) => setMsgTopic(e.target.value)}>
                    <option hidden>{' '}</option>
                    <option>Getting there</option>
                    <option>House details and rules</option>
                    <option>Availability</option>
                    <option>Refund policy</option>
                    <option>Other</option>
                  </Control>
                  <Feedback type="invalid">
                    Please provide a topic for the message
                  </Feedback>
                  <Feedback type="valid">
                    Looks good!
                  </Feedback>
                </Group>
                <Group controlId="validationCustom01">
                  <Label>Message: </Label>
                  <Control
                    as="textarea"
                    rows={4}
                    placeholder="Message here"
                    required
                    onChange={(e) => setMsgBody(e.target.value)}
                  />
                  <Feedback type="invalid">
                    Please provide a message
                  </Feedback>
                  <Feedback type="valid">
                    Looks good!
                  </Feedback>
                </Group>
                <Button className={classes.hostButton} type='submit'>Send message</Button>
              </Form>
            </Body>
            <Footer>
              <Button className={classes.hostButton} variant='secondary' onClick={resetState}>Close</Button>
            </Footer>
          </Modal>
        </div>
        <hr />
        <ToKnow id={id} />
      </div>
    );
};

export default HostInfo;
