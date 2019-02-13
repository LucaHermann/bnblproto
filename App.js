import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, ScrollView} from 'react-native';

import EventInput from './src/components/EventInput/EventInput';
import EventList from './src/components/EventList/EventList';
import EventDetail from './src/components/EventDetail/EventDetail';
import BnblImg from './src/assets/bnblCorbo.jpg';

export default class App extends Component {
  state = {
    events: [],
    selectedEvent: null
  }

  eventAddedHandler = ( eventName )=> {
    this.setState(prevState => {
      return {
        events: prevState.events.concat({
          key: Math.random(),
          eventName: eventName[0].name,
          eventDesc: eventName[0].desc,
          eventImage: {
            uri: "https://yt3.ggpht.com/a-/ACSszfH3aFJWQIkARyD7el6nla1dR8lj7n8A7CIYTQ=s900-mo-c-c0xffffffff-rj-k-no"
          }
        })
      };
    });
  };

  eventDeletedHandler = () => {
    this.setState(prevState =>{
      return {
        events: prevState.events.filter(event =>{
          return event.key !== prevState.selectedEvent.key;
        }),
        selectedEvent: null
      };
    });
  };

  eventSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedEvent: prevState.events.find(event => {
          return event.key === key;
        })
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedEvent: null
    })
  }

  render() { 
    return (
      <View style={styles.container}>
        <ImageBackground source={BnblImg} style={styles.imgBackground} >
          <EventDetail 
            selectedEvent={this.state.selectedEvent} 
            onItemDeleted={this.eventDeletedHandler}
            onModalClosed={this.modalClosedHandler} />
          <ScrollView>
            <EventInput 
              onEventAdded={this.eventAddedHandler} 
              style={styles.eventInput} />
            <EventList 
              events={this.state.events}
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