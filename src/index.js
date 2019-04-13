import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';

import RootReducer from './reducers/RootReducer';

const store = createStore(RootReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

