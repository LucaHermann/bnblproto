import { ADD_EVENT, DELETE_EVENT } from './actionTypes';

export const addEvent = (event) => {
  return {
    type: ADD_EVENT,
    eventName: event[0],
    eventDescription: event[1]
  };
};

export const deleteEvent = (key) => {
  return {
    type: DELETE_EVENT,
    eventKey: key
  };
};