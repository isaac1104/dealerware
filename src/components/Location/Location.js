import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from '../../actions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AirplanemodeActive from '@material-ui/icons/AirplanemodeActive';
import Business from '@material-ui/icons/Business';
import LocationItem from '../LocationItem';
import Loader from '../Loader';

const Location = () => {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector(state => state.locations);
  const search = useSelector(state => state.search);

  const airportsData = data.filter(
    ({ airport_code, bookable, name }) =>
      airport_code && bookable && name.toLowerCase().includes(search)
  );
  const inTownData = data.filter(
    ({ airport_code, bookable, name }) =>
      !airport_code && bookable && name.toLowerCase().includes(search)
  );

  useEffect(() => {
    dispatch(fetchLocations({ perPage: 100 }));
  }, [dispatch]);

  if (error) return <Typography>{error}</Typography>;

  if (isLoading && data.length === 0) return <Loader />;

  if (!isLoading && data.length > 0) {
    return (
      <Grid container spacing={3}>
        {airportsData.length > 0 && (
          <Grid item xs={12} md={4}>
            <Typography variant='h4' gutterBottom>
              <AirplanemodeActive /> Airports
            </Typography>
            {airportsData.map(data => (
              <LocationItem key={data.id} data={data} />
            ))}
          </Grid>
        )}
        {inTownData.length > 0 && (
          <Grid item xs={12} md={4}>
            <Typography variant='h4' gutterBottom>
              <Business /> In Town
            </Typography>
            {inTownData.map(data => (
              <LocationItem key={data.id} data={data} />
            ))}
          </Grid>
        )}
      </Grid>
    );
  }

  return null;
};

export default Location;
