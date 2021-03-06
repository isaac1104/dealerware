import {
  FETCH_LOCATIONS,
  FETCH_LOCATIONS_COMPLETE,
  FETCH_LOCATIONS_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: null,
};

const locationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_LOCATIONS_COMPLETE:
      return {
        ...state,
        isLoading: false,
        data: action.payload.filter(({ bookable }) => bookable),
        error: null,
      };
    case FETCH_LOCATIONS_ERROR:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default locationsReducer;
