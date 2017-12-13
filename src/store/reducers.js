import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import globalsReducers from '../globals/globalsReducers';

export const makeRootReducer = (asyncReducers) => (
  combineReducers({
    routing: routerReducer,
    globals: globalsReducers,
    ...asyncReducers
  })
);

export const injectReducers = (store, reducers) => {
  store.asyncReducers = {
    ...store.asyncReducers,
    ...reducers
  };
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;