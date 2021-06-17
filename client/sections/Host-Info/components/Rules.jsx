import React from 'react';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import GroupIcon from '@material-ui/icons/Group';
import {makeStyles} from '@material-ui/core/styles';

import styles from '../../../styles.js';

const useStyles = makeStyles(styles);

const Rules = ({ rules }) => {
  const classes = useStyles();

  const smoke = <SmokeFreeIcon className={classes.svg, classes.ruleSvg} />;
  const check = <ScheduleIcon className={classes.svg, classes.ruleSvg} />;
  const music = <VolumeOffIcon className={classes.svg, classes.ruleSvg} />;
  const pets = <img src='https://img.icons8.com/ios-glyphs/30/000000/pet-commands-dismiss.png' alt='' />;
  const noParty = <img src='https://img.icons8.com/ios-glyphs/30/000000/no-alcohol.png' alt='' />;
  const party = <img src='https://img.icons8.com/ios-glyphs/30/000000/champagne.png' alt='' />;
  const child = <RemoveShoppingCartIcon className={classes.svg, classes.ruleSvg} />;
  const jeff = <PersonAddDisabledIcon className={classes.svg, classes.ruleSvg} />;
  const group = <GroupIcon className={classes.svg, classes.ruleSvg} />;

  const template = (icon, rule) => (
    <div className={classes.rule} key={rule}>
      {icon}
      <div className={classes.ruleLine}>{rule}</div>
    </div>
  );

  return (
    <div>
      {rules.map((rule) => {
        if (/smoking/.test(rule)) {
          return template(smoke, rule);
        }
        if (/check/ig.test(rule)) {
          return template(check, rule);
        }
        if (/pets/ig.test(rule)) {
          return template(pets, rule);
        }
        if (/music/.test(rule)) {
          return template(music, rule);
        }
        if (/children/.test(rule)) {
          return template(child, rule);
        }
        if (/(no\spart)|(event)/ig.test(rule)) {
          return template(noParty, rule);
        }
        if (/parties\sonly/ig.test(rule)) {
          return template(party, rule);
        }
        if (/jeff/ig.test(rule)) {
          return template(jeff, rule);
        }
        if (/visitor/ig.test(rule)) {
          return template(group, rule);
        }
        return <div />;
      })}
    </div>
  );
};

export default Rules;
