import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, ScrollView} from 'react-native';
import { connect } from "react-redux"

import { addEvent, deleteEvent, selectEvent, unselectEvent } from './src/store/actions/index';
import EventInput from './src/components/EventInput/EventInput';
import EventList from './src/components/EventList/EventList';
import EventDetail from './src/components/EventDetail/EventDetail';
import BnblImg from './src/assets/bnblCorbo.jpg';

class App extends Component {
  eventAddedHandler = (eventName) => {
    this.props.onAddEvent(eventName);
  };

  eventDeletedHandler = () => {
    this.props.onDeleteEvent();
  };

  eventSelectedHandler = (key) => {
    this.props.onSelectedEvent(key);
  };

  modalClosedHandler = () => {
    this.props.onUnselectEvent();
  }

  render() { 
    return (
      <View style={styles.container}>
        <ImageBackground source={BnblImg} style={styles.imgBackground} >
          <EventDetail 
            selectedEvent={this.props.selectedEvent} 
            onItemDeleted={this.eventDeletedHandler}
            onModalClosed={this.modalClosedHandler} />
          <ScrollView>
            <EventInput 
              onEventAdded={this.eventAddedHandler} 
              style={styles.eventInput} />
            <EventList 
              events={this.props.events}
              onEventSelected={this.eventSelectedHandler} />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  eventInput: {
    marginTop: 5
  },
  imgBackground: {
    flex: 1,
    width: "100%",
    height: null,
  }
});

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    selectedEvent: state.events.selectedEvent
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddEvent: (name) => dispatch(addEvent(name)),
    onDeleteEvent: () => dispatch(deleteEvent()),
    onSelectedEvent: (key) => dispatch(selectEvent(key)),
    onUnselectEvent: () => dispatch(unselectEvent())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);