import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Button, 
  TextInput, 
  StyleSheet, 
  ImageBackground,
  Dimensions
} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import bnblBgd from '../../assets/bnblWhite.jpg';
import validate from '../../utility/validation';

class authScreen extends Component {
  state = {
    viewMode:  Dimensions.get('window').height > 500 ? "portrait" : "landscape",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: "password"
        }
      }
    }
  }

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles)
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    })
  }

  loginHandler = () => {
    startMainTabs();
  }

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            )
          }
        }
      };
    });
  };

  render () {
    let headingText = null;

    if (Dimensions.get('window').height > 500) {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      )
    }

    return (
    <ImageBackground 
      source={bnblBgd} 
      style={styles.backgroundImage}>
      <View style={styles.container}>
        {headingText}
        <Button title="Switch to login" />
        <View style={styles.inputContainer}>
          <DefaultInput 
            placeholder="Your E-mail Adress" 
            style={styles.input} 
            value={this.state.controls.email.value}
            onChangeText={(val) => this.updateInputState('email', val)}
          />
          <View style={
            this.state.viewMode === "portrait" 
              ? styles.portraitPasswordContainer 
              : styles.landscapePasswordContainer}>
            <View style={
              this.state.viewMode === "portrait" 
                ? styles.portraitPasswordWrapper : 
                styles.landscapePasswordWrapper}>
              <DefaultInput 
                placeholder="Your Password" 
                style={styles.input} 
                value={this.state.controls.password.value}
                onChangeText={(val) => this.updateInputState('password', val)}
              />
            </View>
            <View style={
              this.state.viewMode === "portrait" 
                ? styles.portraitPasswordWrapper 
                : styles.landscapePasswordWrapper}>
              <DefaultInput 
                placeholder="Confirm Password" 
                style={styles.input} 
                value={this.state.controls.confirmPassword.value}
                onChangeText={(val) => this.updateInputState('confirmPassword', val)}
              />
            </View>
          </View>
        </View>
      <Button 
        title="Submit" 
        onPress={this.loginHandler} />
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
  },
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landscapePasswordWrapper: {
    width: "45%"
  },
  portraitPasswordWrapper: {
    width: "100%"
  }
});

export default authScreen;