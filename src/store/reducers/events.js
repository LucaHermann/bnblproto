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
          eventLocation: action.eventLocation,
          eventImage: { 
            uri: action.eventImage.uri,
            base64: action.eventImage.data }
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