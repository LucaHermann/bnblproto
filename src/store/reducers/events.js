import { ADD_EVENT, DELETE_EVENT, SELECT_EVENT, UNSELECT_EVENT } from '../actions/actionTypes';
import { selectEvent } from '../actions/events';

const initialState = {
  events: [],
  selectedEvent: null
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: state.events.concat({
          key: Math.random(),
          eventName: action.eventName,
          eventDesc: action.eventDesc,
          eventImage: {
            uri: "https://yt3.ggpht.com/a-/ACSszfH3aFJWQIkARyD7el6nla1dR8lj7n8A7CIYTQ=s900-mo-c-c0xffffffff-rj-k-no"
          }
        })
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => {
          return event.key !== state.selectedEvent.key;
        }),
        selectedEvent: null
      };
    case SELECT_EVENT:
      return {
        ...state,
          selectedEvent: state.events.find(event => {
            return event.key === action.eventKey;
          })
        };
    case UNSELECT_EVENT:
      return {
        ...state,
        selectedEvent: null
      };
    default:
      return state;
  }
};

export default eventsReducer;