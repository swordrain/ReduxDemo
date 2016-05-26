import {connect} from 'react-redux'
import React, {Component} from 'react';
class App extends Component {
	render() {
		return (<div> Hello </div>)
	}
}

function select(state) {
  return {
    movies: state.movieReducer,
    favorites: state.favoriteReducer
  }
}

export default connect(select)(App)