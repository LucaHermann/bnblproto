import React from 'react'
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
  <TextInput 
    {...props}
    style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]}
  />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#eee",
    marginTop: 8,
    marginBottom: 8,
    padding: 5
  },
  invalid : {
    backgroundColor: "#f9c0c0",
    borderColor: "red"
  }
});

export default defaultInput;