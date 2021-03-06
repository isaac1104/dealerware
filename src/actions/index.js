import axios from 'axios';
import {
  FETCH_LOCATIONS,
  FETCH_LOCATIONS_COMPLETE,
  FETCH_LOCATIONS_ERROR,
} from './types';

export const fetchLocations = () => async dispatch => {
  dispatch({ type: FETCH_LOCATIONS });
  try {
    const request = await axios.get('https://api.silvercar.com/locations', {
      headers: {
        'api-version': 2,
        Accept: 'application/json',
      },
    });
    dispatch({ type: FETCH_LOCATIONS_COMPLETE, payload: request.data });
  } catch (err) {
    dispatch({ type: FETCH_LOCATIONS_ERROR, payload: err.message });
  }
};
