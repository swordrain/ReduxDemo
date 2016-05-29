import {connect} from 'react-redux'
import React, {Component} from 'react';
import Header from './Component/Header';
import MovieList from './Component/MovieList';
import FavoriteList from './Component/FavoriteList';
import LoadMovieButton from './Component/LoadMovieButton';
import {addNewMovies, addNewFavorite, removeFavorite, fetchMovies} from './Action/actions';
import $ from 'jquery';

class App extends Component {

	constructor(props){
		super(props);
	}

	_loadMovie() {
		const { dispatch, movies } = this.props;
		dispatch(fetchMovies(movies));
	}

	addFavorite(movie) {
		const { dispatch, favorites } = this.props;
		dispatch(addNewFavorite(movie));
	}

	removeFavorite(movie) {
		const { dispatch, favorites } = this.props;
		dispatch(removeFavorite(movie));
	}

	loadImage() {

	}

	
	render() {
		const { dispatch, movies, loading, favorites } = this.props;
		console.log(movies);
		return (
			<div>
				<Header />
				<LoadMovieButton loadMovie={this._loadMovie.bind(this)} loading={loading} reachMax={movies.length >=250}/>
				<hr />
				<div style={{display:'flex', flexDirection:'row', width: '100%'}}>
					<MovieList style={{flex: 1, padding: 20, height: 500, overflowY: 'auto'}} movies={movies} addFavorite={this.addFavorite.bind(this)} />
					<FavoriteList style={{flex:1, padding: 20, height: 500, overflowY: 'auto'}} favorites={favorites} removeFavorit={this.removeFavorite.bind(this)}/>	
				</div>
			</div>
			)
		}
}

function select(state) {
  return {
    movies: state.movieReducer,
    favorites: state.favoriteReducer,
    loading: state.loadingReducer
  }
}

export default connect(select)(App)