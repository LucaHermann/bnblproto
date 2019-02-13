import { createStore, combineReducers } from 'redux';

import eventsReducer from './reducers/events';

const rootReducer = combineReducers({
  events: eventsReducer
});

const configStore = () => {
  return createStore(rootReducer);
};

export default configStore;