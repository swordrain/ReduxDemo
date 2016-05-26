

export const ADD_NEW_MOVIES = "ADD_NEW_MOVIES";
export const ADD_NEW_FAVORITE = "ADD_NEW_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addNewMovies = ((payload) =>{
	return {
		type: ADD_NEW_MOVIES,
		payload
	};
});

export const addNewFavorite = ((payload) => {
	return {
		type: ADD_NEW_FAVORITE,
		payload
	};
});

export const removeFavorite = ((payload) => {
	return {
		type : REMOVE_FAVORITE,
		payload
	}
});
