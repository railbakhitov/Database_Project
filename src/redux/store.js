
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import index  from './reducers';

let reduxMiddlewares = [];
reduxMiddlewares.push(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    participant: []
}

let store = createStore(index, initialState, composeEnhancers(applyMiddleware(...reduxMiddlewares)));

export default store;