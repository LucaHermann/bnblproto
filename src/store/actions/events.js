import { ADD_EVENT, DELETE_EVENT } from './actionTypes';

export const addEvent = (eventName) => {
  return {
    type: ADD_EVENT,
    eventName: eventName[0].Name,
    eventDesc: eventName[0].Desc
  };
};

export const deleteEvent = (key) => {
  return {
    type: DELETE_EVENT,
    eventKey: key
  };
};