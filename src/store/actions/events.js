import { ADD_EVENT, DELETE_EVENT, SELECT_EVENT, UNSELECT_EVENT } from './actionTypes';

export const addEvent = (eventName) => {
  return {
    type: ADD_EVENT,
    eventName: eventName
  };
};

export const deleteEvent = (eventName) => {
  return {
    type: DELETE_EVENT,
    eventName: eventName
  };
};

export const selectEvent = (eventName) => {
  return {
    type: SELECT_EVENT,
    eventName: eventName
  };
};

export const unselectEvent = (eventName) => {
  return {
    type: UNSELECT_EVENT,
    eventName: eventName
  };
};