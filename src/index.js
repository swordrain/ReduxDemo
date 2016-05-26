import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {Provider} from 'react-redux';
import reducers from './Reducers/Reducers.js';
import {createStore} from 'redux';
import {addNewMovies} from './Action/actions.js';


let store = createStore(reducers);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
