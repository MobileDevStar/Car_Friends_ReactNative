import { combineReducers } from 'redux';

import GarageFinderReducer from '../reducers/garage/garageFinderReducer';

export default combineReducers({
  garageFinderReducer: GarageFinderReducer
});