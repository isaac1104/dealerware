import {
  FETCH_LOCATIONS,
  FETCH_LOCATIONS_COMPLETE,
  FETCH_LOCATIONS_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  data: [],
  total: null,
  pageSize: null,
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
        data: action.payload.data,
        total: action.payload.headers.total,
        pageSize: action.payload.headers['per-page'],
        error: null,
      };
    case FETCH_LOCATIONS_ERROR:
      return {
        ...state,
        isLoading: false,
        data: [],
        total: null,
        pageSize: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default locationsReducer;
