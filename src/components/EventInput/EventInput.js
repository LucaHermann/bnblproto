import React, { Component } from 'react';
import { StyleSheet ,View, Button, TextInput, Text } from 'react-native';

import DefaultInput from '../UI/DefaultInput/DefaultInput';

const eventInput = (props) => {
  return (
    <View style={styles.container}>
      <DefaultInput 
        placeholder="Add Event/Drop Name" 
        val={props.eventName} 
        onChangeName={props.eventNameChangedHandler} />
      <DefaultInput 
        placeholder="Add Event/Drop Description" 
        val={props.eventDescription} 
        onChangeDescription={props.eventDescriptionChangedHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  }
})

export default eventInput;