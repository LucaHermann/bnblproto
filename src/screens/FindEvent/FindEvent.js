import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import EventList from '../../components/EventList/EventList';

class FindEventScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    console.log(event);
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }
  
  eventSelectedHandler = key => {
    const selecEvent = this.props.events.find(event => {
      return event.key === key;
    });
    this.props.navigator.push({
      screen: "benibla-events.EventDetailScreen",
      title: selecEvent.eventName,
      passProps: {
        selectedEvent: selecEvent
      }
    });
  }
  
  render () {
    return (
      <View>
        <EventList 
          events={this.props.events}
          onEventSelected={this.eventSelectedHandler} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events.events
  }
}

export default connect(mapStateToProps)(FindEventScreen);