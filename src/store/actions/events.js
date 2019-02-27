import { SET_EVENTS, REMOVE_EVENT } from './actionTypes';
import { uiStartLoading, uiStopLoading } from './index';

export const addEvent = (event) => {
  return dispatch => {
    dispatch(uiStartLoading());
  fetch("https://us-central1-beniblaproto.cloudfunctions.net/storeImage", {
    method: "POST",
    body: JSON.stringify({
      image: event[3].base64
    })
  })
  .catch(err => {
    console.log(err);
    dispatch(uiStopLoading());
  })
  .then(res => res.json())
  .then(parsedRes => {
    const eventData = {
      eventName: event[0],
      eventDescription: event[1],
      eventLocation: event[2],
      image: parsedRes.imageUrl
    };
    return fetch("https://beniblaproto.firebaseio.com/events.json", {
      method: "POST",
      body: JSON.stringify(eventData)
    })
  })
  .catch(err => {
    console.log(err);
    dispatch(uiStopLoading());
  })
  .then(res => res.json())
  .then(parsedRes => {
    console.log(parsedRes);
    dispatch(uiStopLoading());
  });
  };
};

export const getEvents = () => {
  return dispatch => {
    fetch("https://beniblaproto.firebaseio.com/events.json")
    .catch(err => {
      alert("error");
      console.log(err);
    })
    .then(res => res.json())
    .then(parsedRes => {
      const events = [];
      for (let key in parsedRes) {
        events.push({
          ...parsedRes[key],
          image: {
            uri: parsedRes[key].image
          },
          key: key
        });
      }
      dispatch(setEvents(events))
    });
  };
};

export const setEvents = events => {
  return {
    type: SET_EVENTS,
    events: events
  }
}

export const deleteEvent = (key) => {
  return dispatch => {
    dispatch(removeEvent(key));
    return fetch("https://beniblaproto.firebaseio.com/events/" + key + ".json", {
      method: "DELETE"
    })
    .catch(err => {
      alert("error");
      console.log(err);
    })
    .then(res => res.json())
    .then(parsedRes => {
      console.log("[action/event.js]", "Done!")
    });
  };
};

export const removeEvent = key => {
  return {
    type: REMOVE_EVENT,
    key: key
  };
};