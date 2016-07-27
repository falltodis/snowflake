/**
* # configureStore.js
*
* A Redux boilerplate setup
*
*/
'use strict';

/**
* ## Imports
*
* redux functions
*/
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

/**
* ## Reducer
* The reducer contains the 4 reducers from
* device, global, auth, profile
*/
import reducer from '../reducers';

/**
* ## creatStoreWithMiddleware
* Like the name...
*/

/**
* ## configureStore
* @param {Object} the state with for keys:
* device, global, auth, profile
*
*/
export default function (initialState){
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
