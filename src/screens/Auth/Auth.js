import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
class authScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Please Log In</Text>
        <Button title="Switch to login" />
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Your e-mail" />
          <DefaultInput placeholder="Your Password" />
          <DefaultInput placeholder="Confirm Password" />
        </View>
        <Button title="Submit" onPress={this.loginHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    margin: 8,
    padding: 5
  }
});

export default authScreen;