// This is the rootReducer!
// To make a RootReducer:
// 1. Get combineReducers method from redux
// 2. Call combineReducers method an pass it an object
// 3. Each key/property of the object, will be a single piece of application/redux state
// 4. Each value will be a single reducer (imported)

import { combineReducers } from 'redux'; //1 
import weatherReducer from './weatherReducer';
import stockReducer from './stockReducer';

