import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reduxPromiseMiddleware from 'redux-promise-middleware'

import reducer from '../reducers/index';

export default createStore(
    reducer, {},
    //    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(logger, thunk, reduxPromiseMiddleware)
    //    )
);