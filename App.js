import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'; 

import EventInput from './src/components/EventInput/EventInput';
import EventList from './src/components/EventList/EventList';

export default class App extends Component {
  state = {
    events: []
  }

  eventAddedHandler = eventName => {
    this.setState(prevState => {
      return {
        events: prevState.events.concat({
          key: Math.random(),
          val: eventName
        })
      };
    });
  };

  eventDeletedHandler = index => {
    this.setState(prevState => {
      return {
        events: prevState.events.filter((event, id) => {
          return id !== index;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <EventInput onEventAdded={this.eventAddedHandler} />
        <EventList events={this.state.events} onEventDeleted={this.eventDeletedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});