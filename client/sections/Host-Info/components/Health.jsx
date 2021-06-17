import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import {makeStyles} from '@material-ui/core/styles';

import styles from '../../../styles.js';

const useStyles = makeStyles(styles);

const Health = ({ health }) => {
  const classes = useStyles();

  const committed = <i className={classes.fas, classes.faHandSparkles} />;
  const clean = <i className={classes.fas, classes.faHandsWash} />;
  const check = <CheckCircleIcon className={classes.svg} />;
  const card = <CreditCardIcon className={classes.svg} />;

  const template = (icon, rule) => (
    <div className={classes.rule} key={rule}>
      {icon}
      <div className={classes.ruleLine}>{rule}</div>
    </div>
  );

  return (
    <div>
      {health.map((rule) => {
        if (/alarm/.test(rule)) {
          return template(check, rule);
        }
        if (/committed/ig.test(rule)) {
          return template(committed, rule);
        }
        if (/guidelines/g.test(rule)) {
          return template(clean, rule);
        }
        if (/security/ig.test(rule)) {
          return template(card, rule);
        }
        return <div />;
      })}
    </div>
  );
};

export default Health;
