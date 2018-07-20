import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducers.js';

import thunk from 'redux-thunk';

let finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore);

export default function configureStore(initialState = {}) {
    return finalCreateStore(reducer,
        initialState
          
    );
}