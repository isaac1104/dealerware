import { SEARCH_LOCATION } from '../actions/types';

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_LOCATION:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
