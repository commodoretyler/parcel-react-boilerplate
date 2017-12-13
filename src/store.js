import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';

const middlewares = [
  thunkMiddleware
];

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default store;


