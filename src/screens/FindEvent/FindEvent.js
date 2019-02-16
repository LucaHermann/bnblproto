import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import EventList from '../../components/EventList/EventList';

class FindEventScreen extends Component {
  render () {
    return (
      <View>
        <EventList events={this.props.events}/>
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