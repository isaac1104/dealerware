import axios from 'axios';
import {
  FETCH_LOCATIONS,
  FETCH_LOCATIONS_COMPLETE,
  FETCH_LOCATIONS_ERROR,
  SEARCH_LOCATION,
} from './types';

export const fetchLocations = ({ perPage }) => async dispatch => {
  dispatch({ type: FETCH_LOCATIONS });
  try {
    const getLocations = page =>
      axios.get(
        `https://api.silvercar.com/locations?page=${page}&per_page=${perPage}`,
        {
          headers: {
            'api-version': 2,
            Accept: 'application/json',
          },
        }
      );

    // make the initial request with page 1 and per page paramenter
    const initialRequest = await getLocations(1);
    const {
      headers: { page, total },
    } = initialRequest;

    // convert string values to number
    const pageInt = parseInt(page);
    const totalInt = parseInt(total);
    const pageSize = parseInt(initialRequest.headers['per-page']);
    const totalPage = Math.ceil(totalInt / pageSize);

    const requestArray = [];

    // if more pages are available, push the axios method into the requestArray
    if (totalPage > pageInt) {
      for (let i = pageInt + 1; i <= totalPage; i++) {
        requestArray.push(getLocations(i));
      }
    }

    // make axios get request for each requests in the request array
    const additionalRequests = await axios.all(requestArray);

    // merge additionalRequests data array into one
    const mergedData = additionalRequests.flatMap(({ data }) => data);

    // merge all arrays into one
    const data = [...initialRequest.data, ...mergedData];

    dispatch({ type: FETCH_LOCATIONS_COMPLETE, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_LOCATIONS_ERROR, payload: err.message });
  }
};

export const searchLocation = term => ({
  type: SEARCH_LOCATION,
  payload: term,
});
