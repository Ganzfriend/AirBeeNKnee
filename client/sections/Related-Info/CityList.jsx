import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles.js';

const useStyles = makeStyles(styles);

const CityList = ({ cities, setCity }) => {
  const classes = useStyles();
  return (
    <Box className={classes.cityList}>
      { cities.map(city => (
        <Button className={classes.cities} key={city._id} onClick={() => setCity(city.name)}>
          {city.name}
        </Button>
      ))}
    </Box>
  );
};

export default CityList;
