import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native'; 

import EventInput from './src/components/EventInput/EventInput';
import EventList from './src/components/EventList/EventList';
import EventDetail from './src/components/EventDetail/EventDetail';
import BnblImg from './src/assets/bnbl.jpg';

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
            uri: "https://leptitrennais.fr/wp-content/uploads/2016/10/1795627_10156282798320176_4706613982959915360_n.jpg"
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
            onModalClosed={this.modalClosedHandler}/>
          <EventInput onEventAdded={this.eventAddedHandler} />
          <EventList 
            events={this.state.events}
            onEventSelected={this.eventSelectedHandler} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imgBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});