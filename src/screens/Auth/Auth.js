import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import bnblBgd from '../../assets/bnblwhite.jpg';

class authScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }

  render () {
    return (
    <ImageBackground 
      source={bnblBgd} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
        <Button title="Switch to login" color={"#8B008B"}/>
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Your E-mail Adress" style={styles.input}/>
          <DefaultInput placeholder="Your Password" style={styles.input}/>
          <DefaultInput placeholder="Confirm Password" style={styles.input}/>
        </View>
      <Button title="Submit" onPress={this.loginHandler} color={"#8B008B"}/>
      </View>
    </ImageBackground>
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
    width: "80%",
  },
  textHeading: {
    fontSize: 28,
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  }
});

export default authScreen;