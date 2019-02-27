import React, {Component} from 'react';
import { 
  View, 
  ScrollView , 
  Image, 
  Text, 
  Button, 
  StyleSheet, 
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import Icon from 'react-native-vector-icons/Ionicons';
import { deleteEvent } from '../../store/actions/index';



class EventDetail extends Component {
  state = {
    viewMode : "portrait"
  }
  constructor(props){
    super(props);
    Dimensions.addEventListener("change", this.updateStyles)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    })
  }

  eventDeletedHandler = () => {
    this.props.onDeleteEvent(this.props.selectedEvent.key);
    this.props.navigator.pop();
  }

  render () {
    return (
      <ScrollView>
        <View style={[
          styles.container, 
            this.state.viewMode === "portrait" 
            ? styles.portraitContainer
            : styles.landscapeContainer ]}>
          <View style={styles.subContainer}>
            <Image 
              source={this.props.selectedEvent.image} 
              style={styles.eventImage} />
          </View>
          <View style={styles.subContainer}>
            <MapView 
              initialRegion={{
                ...this.props.selectedEvent.eventLocation,
                latitudeDelta: 0.0122,
                longitudeDelta: 
                Dimensions.get("window").width / 
                Dimensions.get("window").height * 
                0.0122
              }}
              style={styles.map}>
              <MapView.Marker coordinate={this.props.selectedEvent.eventLocation} />
            </MapView>
          </View>
          <View style={styles.subContainer}>
            <View>
              <Text style={styles.eventName}>{this.props.selectedEvent.eventName}</Text>
              <Text style={styles.eventDesc}>{this.props.selectedEvent.eventDescription}</Text>
            </View>
            <View style={styles.trashContainer}>
              <TouchableOpacity>
                <Icon size={30} name="ios-trash" color="red" onPress={this.eventDeletedHandler} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1
  },
  portraitContainer: {
    flexDirection: 'column'
  },
  landscapeContainer: {
    flexDirection: 'row'
  },
  trashContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  eventImage: {
    width: "100%",
    height: 250
  },
  eventName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
    marginTop: 195
  },
  eventDesc: {
    textAlign: "center"
  },
  subContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 180,
    marginTop: 15
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeleteEvent: (key) => dispatch(deleteEvent(key))
  };
};

export default connect(null, mapDispatchToProps)(EventDetail);