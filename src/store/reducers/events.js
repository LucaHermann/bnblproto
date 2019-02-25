import { ADD_EVENT, DELETE_EVENT } from '../actions/actionTypes';

const initialState = {
  events: []
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: state.events.concat({
          key: '' + Math.random(),
          eventName: action.eventName,
          eventDescription: action.eventDescription,
          eventImage: {
            uri: "https://yt3.ggpht.com/a-/ACSszfH3aFJWQIkARyD7el6nla1dR8lj7n8A7CIYTQ=s900-mo-c-c0xffffffff-rj-k-no"
          },
          eventLocation: action.eventLocation
        })
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

export default eventsReducer;