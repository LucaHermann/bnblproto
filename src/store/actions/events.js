import { SET_EVENTS, REMOVE_EVENT } from './actionTypes';
import { uiStartLoading, uiStopLoading, authGetToken } from './index';

export const addEvent = (event) => {
  return dispatch => {
    dispatch(uiStartLoading());
    dispatch(authGetToken())
    .catch(() => {
      alert("No valid Token found!")
    })
    .then(token => {
      return fetch("https://us-central1-beniblaproto.cloudfunctions.net/storeImage", {
        method: "POST",
        body: JSON.stringify({
          image: event[3].base64
        })
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
  .then(res => res.json())
  .then(parsedRes => {
    console.log(parsedRes);
    dispatch(uiStopLoading());
  })
  .catch(err => {
    console.log(err);
    dispatch(uiStopLoading());
  });
  };
};

export const getEvents = () => {
  return dispatch => {
    dispatch(authGetToken())
      .then(token => {
        return fetch("https://beniblaproto.firebaseio.com/events.json?auth=" + token)
      })
      .catch(() => {
        alert("No valid Token found!")
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
    })
    .catch(err => {
      alert("error");
      console.log(err);
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
    dispatch(authGetToken())
    .catch(() => {
      alert("No valid Token found!")
    })
    .then(token => {
      dispatch(removeEvent(key));
      return fetch("https://beniblaproto.firebaseio.com/events/" + key + ".json?auth=" + token, {
        method: "DELETE"
      })
    }).then(res => res.json())
    .then(parsedRes => {
      console.log("[action/event.js]", "Done!")
    })
    .catch(err => {
      alert("error");
      console.log(err);
    });
  };
};

export const removeEvent = key => {
  return {
    type: REMOVE_EVENT,
    key: key
  };
};