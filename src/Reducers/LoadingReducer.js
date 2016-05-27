import {START_ADD_NEW_MOVIES} from '../Action/actions';


export default function loadingReducer(state=false, action) {
	console.log('in loadingReducer');
	if(action.type === START_ADD_NEW_MOVIES){
		console.log('ADD_NEW_MOVIES triggered');
		return action.payload;
	}else{
		return state;
	}
}