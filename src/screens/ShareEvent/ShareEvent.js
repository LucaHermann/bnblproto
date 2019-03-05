import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";

import { addEvent } from "../../store/actions/index";
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import EventInput from "../../components/EventInput/EventInput";
import PickImage from "../../components/PickImage/PickImage";
import PickLocation from "../../components/PickLocation/PickLocation";
import validate from "../../utility/validation";
import { startAddEvent } from "../../store/actions/index";

class ShareEventScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "black"
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentWillMount() {
    this.reset();
  }

  reset = () => {
    this.setState({
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
        },
        image: {
          value: null,
          valid: false
        }
      }
    });
  };

  componentDidUpdate() {
    if (this.props.eventAdded) {
      this.props.navigator.switchToTab({ tabIndex: 0 });
      // this.props.onStartAddEvent();
    }
  }

  onNavigatorEvent = event => {
    if (event.type === "ScreenChangedEvent") {
      if (event.id === "willAppear") {
        this.props.onStartAddEvent();
      }
    }
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
            valid: validate(
              val,
              prevState.controls.eventDescription.validationRules
            ),
            touched: true
          }
        }
      };
    });
  };

  eventAddedHandler = () => {
    const event = [
      this.state.controls.eventName.value,
      this.state.controls.eventDescription.value,
      this.state.controls.location.value,
      this.state.controls.image.value
    ];
    this.props.onAddEvent(event);
    alert("Event/Drop added");
    this.reset();
    this.imagePicker.reset();
    this.locationPicker.reset();
  };

  imagePickedHandler = image => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          image: {
            value: image,
            valid: true
          }
        }
      };
    });
  };

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
      };
    });
  };

  render() {
    let submitButton = (
      <Button
        title="Share event/drop"
        onPress={this.eventAddedHandler}
        disabled={
          !this.state.controls.eventName.valid &&
          !this.state.controls.eventDescription.valid
        }
      />
    );

    if (this.props.isLoading) {
      submitButton = <ActivityIndicator />;
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <PickImage
            onImagePicked={this.imagePickedHandler}
            ref={ref => (this.imagePicker = ref)}
          />
          <PickLocation
            onLocationPick={this.locationPickHandler}
            ref={ref => (this.locationPicker = ref)}
          />
          <EventInput
            eventDataName={this.state.controls.eventName}
            onChangeName={this.eventNameChangedHandler}
            eventDataDescription={this.state.controls.eventDescription}
            onChangeDescription={this.eventDescriptionChangedHandler}
          />
          <View style={styles.button}>{submitButton}</View>
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
  },
  loadingButton: {
    color: "#007AFF"
  }
});

const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading,
    eventAdded: state.events.eventAdded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddEvent: eventName => dispatch(addEvent(eventName)),
    onStartAddEvent: () => dispatch(startAddEvent())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareEventScreen);
