import axios from 'axios';
import {
  FETCH_LOCATIONS,
  FETCH_LOCATIONS_COMPLETE,
  FETCH_LOCATIONS_ERROR,
  SEARCH_LOCATION,
} from './types';

export const fetchLocations = () => async dispatch => {
  dispatch({ type: FETCH_LOCATIONS });
  try {
    const request = await axios.get(
      `https://api.silvercar.com/locations?page=1&per_page=100`,
      {
        headers: {
          'api-version': 2,
          Accept: 'application/json',
        },
      }
    );
    dispatch({ type: FETCH_LOCATIONS_COMPLETE, payload: request.data });
  } catch (err) {
    dispatch({ type: FETCH_LOCATIONS_ERROR, payload: err.message });
  }
};

export const searchLocation = term => ({
  type: SEARCH_LOCATION,
  payload: term,
});
