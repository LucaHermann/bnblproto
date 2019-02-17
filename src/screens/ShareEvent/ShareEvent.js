import React, { Component } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

import { addEvent } from '../../store/actions/index';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import EventInput from '../../components/EventInput/EventInput';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

class ShareEventScreen extends Component {
  state = {
    eventName: "",
    eventDescription: ""
  };

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

  eventNameChangedHandler = val => {
    this.setState({
      eventName: val
    })
  }

  eventDescriptionChangedHandler = val => {
    this.setState({
      eventDescription: val
    })
  }

  eventAddedHandler = () => {
    if (this.state.eventName.trim() === "") {
      alert("")
      return;
    }
    const event = []
    event.push({
      eventName: this.state.eventName,
      eventDesc: this.state.eventDescription,
    })
    this.props.addEvent(this.state.event);
  }

  render () {
    return (
    <ScrollView>
      <View style={styles.container}>
        <PickImage />
        <PickLocation />
        <EventInput 
          eventName={this.state.eventName}
          onChangeName={this.eventNameChangedHandler}
          eventDescription={this.state.eventDescription}
          onChangeDescription={this.eventDescriptionChangedHandler}
          />
        <View style={styles.button}>
          <Button 
            title="Share event/drop" 
            onPress={this.eventAddedHandler}
            />
        </View>
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 7
  },
  imagePreview: {
    width: "100%",
    height: "100%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddEvent: (eventName) => dispatch(addEvent(eventName))
  };
};

export default connect(null, mapDispatchToProps)(ShareEventScreen);