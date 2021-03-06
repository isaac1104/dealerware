import { combineReducers } from 'redux';
import locationsReducer from './locations_reducer';

const rootReducer = combineReducers({
  locations: locationsReducer,
});

export default rootReducer;
