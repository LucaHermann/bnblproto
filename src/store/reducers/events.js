import { ADD_EVENT, DELETE_EVENT, SELECT_EVENT, UNSELECT_EVENT } from '../actions/actionTypes';

const initialState = {
  events: [],
  selectedEvent: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: state.events.concat({
          key: Math.random(),
          eventName: action.eventName[0].name,
          eventDesc: action.eventName[0].desc,
          eventImage: {
            uri: "https://yt3.ggpht.com/a-/ACSszfH3aFJWQIkARyD7el6nla1dR8lj7n8A7CIYTQ=s900-mo-c-c0xffffffff-rj-k-no"
          }
        })
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event =>{
          return event.key !== state.selectedEvent.key;
        }),
        selectedEvent: null
      }
    default:
      return state;
  }
};

export default reducer;