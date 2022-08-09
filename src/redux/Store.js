import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './Reducer';
import thunk from 'redux-thunk'
import { Rootsaga } from './Auth.Saga/Rootsaga';

const sagaMiddleware = createSagaMiddleware()

const middleWare = [thunk, sagaMiddleware]

export const configureStore = () =>{
  const store = createStore(rootReducer, applyMiddleware(...middleWare));
  sagaMiddleware.run(Rootsaga)
  return store
} 

export const store = configureStore();

export default store;

