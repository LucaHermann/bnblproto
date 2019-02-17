import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

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
          placeholder="Add Event/Drop Name"
          style={styles.eventInput} />
        <TextInput 
          onChangeText={this.eventDescriptionChangedHandler}
          value={this.state.eventDescription} 
          placeholder="Add Event/Drop Descripton" 
          style={styles.eventDescInput} 
          editable={true}
          maxLength={1200}
          multiline={true}/>
        <Button 
          onPress={this.eventSubmitHandler}
          title="Add"
          color= "#8B008B"
          style={styles.eventButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginTop: 25,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  eventInput: {
    alignItems: "center",
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#000000"    
  },
  eventDescInput: {
    width: "80%",
    alignItems: "center",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000000"   
  },
  eventButton: {
    width: "20%"
  }
})

export default EventInput;