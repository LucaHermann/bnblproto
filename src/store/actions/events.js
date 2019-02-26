import { ADD_EVENT, DELETE_EVENT } from './actionTypes';
import { connect } from 'react-redux';

export const addEvent = (event) => {
  return dipatch => {
    const eventData = {
      eventName: event[0],
      eventDescription: event[1],
      eventLocation: event[2],
    }
    fetch("https://beniblaproto.firebaseio.com/events.json", {
      method: "POST",
      body: JSON.stringify(eventData)
    })
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes);
    });
  };
  // {
  //   type: ADD_EVENT,
  //   eventImage: event[3]
  // };
};

export const deleteEvent = (key) => {
  return {
    type: DELETE_EVENT,
    eventKey: key
  };
};