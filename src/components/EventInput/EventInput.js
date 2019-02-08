import React, { Component } from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';

class EventInput extends Component {
  state = {
    eventName: '',
    eventDescription: ''
  }

  eventDescriptionChangedHandler = value => {
    this.setState({
      eventDescription: value
    });
  };

  eventNameChangedHandler = value => {
    this.setState({
      eventName: value
    });
  };

  eventSubmitHandler = () => {
    if (this.state.eventName.trim() === "") {
      return;
    }
    const event = []
    event.push({
      name: this.state.eventName,
      desc: this.state.eventDescription,
    })
    this.props.onEventAdded(event);
  }

  render () {
    return (
      <View style={styles.inputContainer}>
        <TextInput 
          onChangeText={this.eventNameChangedHandler}
          value={this.state.eventName}
          placeholder="Add Event Name"
          style={styles.eventInput} />
        <TextInput 
          onChangeText={this.eventDescriptionChangedHandler}
          value={this.state.eventDescription} 
          placeholder="Add Event Descripton" 
          style={styles.eventDescInput} />
        <Button 
          onPress={this.eventSubmitHandler}
          title="Add"
          color="#9d4cff"
          style={styles.eventButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1
    width: '100%',
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  eventInput: {
    width: "80%"
  },
  eventDescInput: {
    width: "80%",
    marginTop: 10
  },
  eventButton: {
    width: "20%"
  }
})

export default EventInput;