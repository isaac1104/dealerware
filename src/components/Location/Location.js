import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from '../../actions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocationItem from '../LocationItem';
import Loader from '../Loader';
import styles from './Location.module.css';

const Location = () => {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector(state => state.locations);

  const airportsData = data.filter(
    ({ airport_code, bookable }) => airport_code && bookable
  );
  const inTownData = data.filter(
    ({ airport_code, bookable }) => !airport_code && bookable
  );

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  console.log('AIRPORT: ', airportsData);
  console.log('IN TOWN: ', inTownData);

  if (error) return <Typography>{error}</Typography>;

  if (isLoading && data.length === 0) return <Loader />;

  if (!isLoading && data.length > 0) {
    return (
      <Grid container spacing={3} className={styles.container}>
        <Grid item xs={12} md={4}>
          <Typography variant='h4' gutterBottom>
            Airports
          </Typography>
          {airportsData.map(data => (
            <LocationItem key={data.id} data={data} />
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant='h4' gutterBottom>
            In Town
          </Typography>
          {inTownData.map(data => (
            <LocationItem key={data.id} data={data} />
          ))}
        </Grid>
      </Grid>
    );
  }

  return null;
};

export default Location;
