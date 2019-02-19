import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { connect } from 'react-redux';

import EventList from '../../components/EventList/EventList';

class FindEventScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "black"
  }

  state = {
    eventsLoaded: false
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }
  
  eventSelectedHandler = key => {
    const selectEvent = this.props.events.find(event => {
      return event.key === key;
    });
    this.props.navigator.push({
      screen: "benibla-events.EventDetailScreen",
      title: selectEvent.eventName,
      passProps: {
        selectedEvent: selectEvent
      }
    });
  }

  eventsSearchHandler = () => {
    this.setState({
      eventsLoaded: true
    })
  }

  render () {
    let content = (
      <TouchableOpacity onPress={this.eventsSearchHandler}>
        <View style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Find Event</Text>
        </View>
      </TouchableOpacity>
    );
    if (this.state.eventsLoaded) {
      content = (
        <EventList 
          events={this.props.events}
          onEventSelected={this.eventSelectedHandler} />
      );
    }
    return (
      <View style={this.state.eventsLoaded ? null : styles.buttonContainer}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  searchButton: {
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 50,
    padding: 20
  },
  searchButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25
  }
});

const mapStateToProps = state => {
  return {
    events: state.events.events
  }
}

export default connect(mapStateToProps)(FindEventScreen);