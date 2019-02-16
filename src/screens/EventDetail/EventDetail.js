import React, {Component} from 'react';
import { 
  View, 
  ScrollView , 
  Image, 
  Text, 
  Button, 
  StyleSheet, 
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import { deleteEvent } from '../../store/actions/index';

class EventDetail extends Component {
  eventDeletedHandler = () => {
    this.props.onDeleteEvent(this.props.selectedEvent.key);
    this.props.navigator.pop();
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image 
            source={this.props.selectedEvent.eventImage} 
            style={styles.eventImage} />
          <Text style={styles.eventName}>{this.props.selectedEvent.eventName}</Text>
          <Text style={styles.eventDesc}>{this.props.selectedEvent.eventDesc}</Text>
        </View>
        <View style={styles.trashContainer}>
          <TouchableOpacity>
            <Icon size={30} name="ios-trash" color="red" onPress={this.eventDeletedHandler} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}


styles = StyleSheet.create({
  container: {
    marginTop: 25
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
    fontSize: 28
  },
  eventDesc: {
    textAlign: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeleteEvent: (key) => dispatch(deleteEvent(key))
  };
};

export default connect(null, mapDispatchToProps)(EventDetail);