import { ADD_EVENT, DELETE_EVENT } from './actionTypes';

export const addEvent = (eventName) => {
  return {
    type: ADD_EVENT,
    eventName: eventName[0].name,
    eventDesc: eventName[0].desc
  };
};

export const deleteEvent = () => {
  return {
    type: DELETE_EVENT
  };
};