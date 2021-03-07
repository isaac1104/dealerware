import { combineReducers } from 'redux';
import locationsReducer from './locations_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  locations: locationsReducer,
  search: searchReducer,
});

export default rootReducer;
