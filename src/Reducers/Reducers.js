import movieReducer from './MovieReducer';
import favoriteReducer from './FavoriteReducer';
import {combineReducers} from 'redux';
const reducers = combineReducers({
	movieReducer,
	favoriteReducer
});
console.log('in reducer', reducers);
module.exports = reducers;