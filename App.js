import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native'; 

import EventInput from './src/components/EventInput/EventInput';
import EventList from './src/components/EventList/EventList';
import BnblImg from './src/assets/bnbl.jpg';
export default class App extends Component {
  state = {
    events: []
  }

  eventAddedHandler = eventName => {
    this.setState(prevState => {
      return {
        events: prevState.events.concat({
          key: Math.random(),
          val: eventName,
          img: BnblImg
        })
      };
    });
  };

  eventDeletedHandler = key => {
    this.setState(prevState => {
      return {
        events: prevState.events.filter((event) => {
          return event.key !== key;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={BnblImg} style={{width: '100%', height: '76%'}}>
          <EventInput onEventAdded={this.eventAddedHandler} />
          <EventList events={this.state.events} onEventDeleted={this.eventDeletedHandler} />
        </ImageBackground>
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