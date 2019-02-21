import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Button, 
  TextInput, 
  Text 
} from 'react-native';

import DefaultInput from '../UI/DefaultInput/DefaultInput';

const eventInput = props => (
    <View style={styles.container}>
      <DefaultInput 
        placeholder="Add Event/Drop Name" 
        value={props.eventDataName.value} 
        valid={props.eventDataName.valid} 
        touched={props.eventDataName.touched}
        onChangeText={props.onChangeName}/>
      <DefaultInput 
        placeholder="Add Event/Drop Description" 
        value={props.eventDataDescription.value} 
        valid={props.eventDataDescription.valid}
        touched={props.eventDataDescription.touched}
        onChangeText={props.onChangeDescription}
        editable={true}
        maxLength={1200}
        multiline={true}/>
    </View>
);


const styles = StyleSheet.create({
  container: {
    width: "100%"
  }
})

export default eventInput;