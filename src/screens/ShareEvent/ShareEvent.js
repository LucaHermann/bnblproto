import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import EventInput from '../../components/EventInput/EventInput';
import { addEvent } from '../../store/actions/index';
class ShareEventScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    console.log(event);
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToogle") {
        this.props.navigator.toogleDrawer({
          side: "left"
        })
      }
    }
  }
  
  eventAddedHandler = eventName => {
    this.props.onAddEvent(eventName);
  }

  render () {
    return (
      <View>
        <EventInput onEventAdded={this.eventAddedHandler}/>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddEvent: (eventName) => dispatch(addEvent(eventName))
  };
};

export default connect(null, mapDispatchToProps)(ShareEventScreen);