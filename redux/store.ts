import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from "./reducers/rootReducers";

const middleware = [thunk];

const composeEnhancers = compose;
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore( 
  rootReducers, 
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;