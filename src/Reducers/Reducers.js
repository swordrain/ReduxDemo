import movieReducer from './MovieReducer';
import favoriteReducer from './FavoriteReducer';
import {combineReducers} from 'redux';
import loadingReducer from './loadingReducer';
const reducers = combineReducers({
	movieReducer,
	favoriteReducer,
	loadingReducer
});
console.log('in reducer', reducers);
module.exports = reducers;