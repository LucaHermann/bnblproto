import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated
} from "react-native";
import { connect } from "react-redux";

import EventList from "../../components/EventList/EventList";
import { getEvents } from "../../store/actions/index";

class FindEventScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "black"
  };

  state = {
    eventsLoaded: false,
    removeAnim: new Animated.Value(1),
    eventAnim: new Animated.Value(0)
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "ScreenChangedEvent") {
      if (event.id === "willAppear") {
        this.props.onLoadEvents();
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

  eventSelectedHandler = key => {
    const selectEvent = this.props.events.find(event => {
      return event.key === key;
    });
    this.props.navigator.push({
      screen: "benibla-events.EventDetailScreen",
      title: selectEvent.eventName,
      passProps: {
        selectedEvent: selectEvent
      }
    });
  };

  eventsLoadedHandler = () => {
    Animated.timing(this.state.eventAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  eventsSearchHandler = () => {
    Animated.timing(this.state.removeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      this.setState({
        eventsLoaded: true
      });
      this.eventsLoadedHandler();
    });
  };

  render() {
    let content = (
      <Animated.View
        style={{
          opacity: this.state.removeAnim,
          transform: [
            {
              scale: this.state.removeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [12, 1]
              })
            }
          ]
        }}
      >
        <TouchableOpacity onPress={this.eventsSearchHandler}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find Events</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
    if (this.state.eventsLoaded) {
      content = (
        <Animated.View
          style={{
            opacity: this.state.eventAnim
          }}
        >
          <EventList
            events={this.props.events}
            onEventSelected={this.eventSelectedHandler}
          />
        </Animated.View>
      );
    }
    return (
      <View style={this.state.eventsLoaded ? null : styles.buttonContainer}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  searchButton: {
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 50,
    padding: 20
  },
  searchButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25
  }
});

const mapStateToProps = state => {
  return {
    events: state.events.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadEvents: () => dispatch(getEvents())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindEventScreen);
