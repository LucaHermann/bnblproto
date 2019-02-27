import { REMOVE_EVENT, SET_EVENTS } from '../actions/actionTypes';

const initialState = {
  events: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        events: action.events
      };
    case REMOVE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => {
          return event.key !== action.key;
        })
      };
    default:
      return state;
  }
};

export default reducer;