

export const ADD_NEW_MOVIES = "ADD_NEW_MOVIES";
export const ADD_NEW_FAVORITE = "ADD_NEW_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const START_ADD_NEW_MOVIES = "START_ADD_NEW_MOVIES";

export const addNewMovies = ((payload) =>{
	console.log('addNewMovies action', payload);
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

const loadingNewMovie = ((loading)=>{
	console.log('in loadingNewMovie', loading);
	return {
		type: START_ADD_NEW_MOVIES,
		payload: loading
	};
});


export const fetchMovies = ((payload) => {
	
	const url = "http://localhost:3000/v2/movie/top250?start=" + payload.length
	return ((dispatch)=>{
		dispatch(loadingNewMovie(true));
		return fetch(url).then((response)=>response.json())
		.then((data)=>{
			dispatch(loadingNewMovie(false));
			dispatch(addNewMovies(data));
		});
	});
});
