import { SEARCH_LOCATION, CLEAR_SEARCH } from '../actions/types';

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_LOCATION:
      return action.payload.toLowerCase();
    case CLEAR_SEARCH:
      return '';
    default:
      return state;
  }
};

export default searchReducer;
