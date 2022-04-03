import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import quoteReducer from './reducer/quoteReducer';
import quoteSaga from './saga/quoteSaga';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk,sagaMiddleware];

const store = createStore(quoteReducer,applyMiddleware(...middleware));
sagaMiddleware.run(mysaga);

export default store;