import { createStore, combineReducers, compose } from 'redux';

import eventsReducer from './reducers/events';

const rootReducer = combineReducers({
  events: eventsReducer
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configStore;