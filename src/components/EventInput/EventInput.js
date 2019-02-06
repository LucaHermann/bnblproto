import React, { Component } from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';

class EventInput extends Component {
  state = {
    eventName: ''
  }

  eventNameChangedHandler = value => {
    this.setState({
      eventName: value
    });
  };
  
  eventSubmitHandler = () => {
    if (this.state.eventName.trim() === "") {
      return;
    }
    this.props.onEventAdded(this.state.eventName);
  }

  render () {
    return (
      <View style={styles.inputContainer}>
        <TextInput 
          onChangeText={this.eventNameChangedHandler}
          value={this.state.eventName}
          placeholder="Event Name"
          style={styles.eventInput} />
        <Button 
          onPress={this.eventSubmitHandler}
          title="Add"
          color="#9d4cff"
          style={styles.eventButton} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  eventInput: {
    width: "80%"
  },
  eventButton: {
    width: "20%"
  }
})

export default EventInput;