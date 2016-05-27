import {ADD_NEW_FAVORITE, REMOVE_FAVORITE} from '../Action/actions';


export default function favoriteReducer(state=[], action) {
	switch(action.type){
		case ADD_NEW_FAVORITE:
			/*return [...state.filter((item)=>{
						return item.id !== action.payload.id;
					}), action.payload];*/
			console.log(state.some((item)=>{
				return item.id === action.payload.id
			}));
			return (state.some((item)=>{
				return item.id === action.payload.id
			}))?state:[...state, action.payload];		
					
		case REMOVE_FAVORITE:
			return state.filter((item)=>{
				return item.id !== action.payload.id;
			});
			break;
		default:
			return state;
	}
}