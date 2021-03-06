import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import track from './track';

export default combineReducers({
	// using this helper func to combine all reducers into another easy interface
	// This func helps share the state between reducers instead of having one reducer return the entire state
	auth,
	track,
	routing: routerReducer
});