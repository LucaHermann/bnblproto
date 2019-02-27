import { DELETE_EVENT, SET_EVENTS } from '../actions/actionTypes';

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
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => {
          return event.key !== action.eventKey;
        })
      };
    default:
      return state;
  }
};

export default reducer;