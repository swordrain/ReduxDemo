import {ADD_NEW_MOVIES} from '../Action/actions';


export default function movieReducer(state=[], action) {

	if(action.type === ADD_NEW_MOVIES){
		console.log('ADD_NEW_MOVIES triggered', action.payload.subjects);
		return state.concat(action.payload.subjects);
	}else{
		return state;
	}
}