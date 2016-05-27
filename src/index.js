import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {Provider} from 'react-redux';
import reducers from './Reducers/Reducers.js';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {addNewMovies} from './Action/actions.js';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
console.log(createStoreWithMiddleware);
let store = createStoreWithMiddleware(reducers);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
