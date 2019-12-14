
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer  from './reducers';

let reduxMiddlewares = [];
reduxMiddlewares.push(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    participantList: [],
    personData: [],
    searchParticipant: null,
    currentParticipant: null,
}

let store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(...reduxMiddlewares)));

export default store;