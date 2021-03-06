import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './LocationItem.module.css';

const LocationItem = ({ data }) => {
  const { name, description } = data;
  return (
    <div className={styles.container}>
      <Typography variant='body1'>{name}</Typography>
      <Typography variant='subtitle2'>{description}</Typography>
    </div>
  );
};

export default LocationItem;
