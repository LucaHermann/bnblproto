import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  ScrollView, 
  StyleSheet, 
  Image 
} from 'react-native';
import { connect } from 'react-redux';

import { addEvent } from '../../store/actions/index';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import EventInput from '../../components/EventInput/EventInput';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import validate from '../../utility/validation';

class ShareEventScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "black"
  }

  state = {
    controls: {
      eventName: {
        value: "",
        valid: false,
        touched: false,
        validationRules: {
          notEmpty: true
        }
      },
      eventDescription: {
        value: "",
        valid: false,
        touched: false,
        validationRules: {
          notEmpty: true
        }
      },
      location: {
        value: null,
        valid: false
      }
    }
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
        });
      }
    }
  };

  eventNameChangedHandler = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          eventName: {
            ...prevState.controls.eventName,
            value: val,
            valid: validate(val, prevState.controls.eventName.validationRules),
            touched: true
          }
        }
      };
    });
  };

  eventDescriptionChangedHandler = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          eventDescription: {
            ...prevState.controls.eventDescription,
            value: val,
            valid: validate(val,  prevState.controls.eventDescription.validationRules),
            touched: true
          }
        }
      };
    });
  };

  eventAddedHandler = () => {
      const event = [this.state.controls.eventName.value, this.state.controls.eventDescription.value, this.state.controls.location.value];
      this.props.onAddEvent(event);
      alert("Event/Drop added")
  }

  locationPickHandler = location => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location,
            valid: true
          }
        }
      }
    });
  }

  render () {
    return (
    <ScrollView>
      <View style={styles.container}>
        <PickImage />
        <PickLocation 
          onLocationPick={this.locationPickHandler}/>
        <EventInput 
          eventDataName={this.state.controls.eventName}
          onChangeName={this.eventNameChangedHandler}
          eventDataDescription={this.state.controls.eventDescription}
          onChangeDescription={this.eventDescriptionChangedHandler}
          />
        <View style={styles.button}>
          <Button 
            title="Share event/drop" 
            onPress={this.eventAddedHandler}
            disabled={!this.state.controls.eventName.valid && !this.state.controls.eventDescription.valid}
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