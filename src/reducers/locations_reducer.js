import {
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_REQUEST_COMPLETE,
  FETCH_LOCATIONS_REQUEST_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: null,
};

const locationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_LOCATIONS_REQUEST_COMPLETE:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_LOCATIONS_REQUEST_ERROR:
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
