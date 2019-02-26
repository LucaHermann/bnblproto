import { ADD_EVENT, DELETE_EVENT } from './actionTypes';
import { connect } from 'react-redux';

export const addEvent = (event) => {
  return dipatch => {
    const eventData = {
      eventName: event[0],
      eventDescription: event[1],
      eventLocation: event[2]
    };
    fetch("https://us-central1-beniblaproto.cloudfunctions.net/storeImage", {
      method: "POST",
      body: JSON.stringify({
        image: event[3].base64
      })
    })
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes)
    });
    // fetch("https://beniblaproto.firebaseio.com/events.json", {
    //   method: "POST",
    //   body: JSON.stringify(eventData)
    // })
    // .catch(err => console.log(err))
    // .then(res => res.json())
    // .then(parsedRes => {
    //   console.log(parsedRes);
    // });
  };
};

export const deleteEvent = (key) => {
  return {
    type: DELETE_EVENT,
    eventKey: key
  };
};