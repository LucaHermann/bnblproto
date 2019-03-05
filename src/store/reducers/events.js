import {
  REMOVE_EVENT,
  SET_EVENTS,
  EVENT_ADDED,
  START_ADD_EVENT
} from "../actions/actionTypes";

const initialState = {
  events: [],
  eventAdded: false
};

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
    case START_ADD_EVENT:
      return {
        ...state,
        eventAdded: false
      };
    case EVENT_ADDED:
      return {
        ...state,
        eventAdded: true
      };
    default:
      return state;
  }
};

export default reducer;
