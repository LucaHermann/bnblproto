import React from 'react';
import { 
  View, 
  ScrollView , 
  Image, 
  Text, 
  Button, 
  StyleSheet, 
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const eventDetail = (props) => {
  return (
  <ScrollView style={styles.container}>
    <View>
      <Image 
        source={props.selectedEvent.eventImage} 
        style={styles.eventImage} />
      <Text style={styles.eventName}>{props.selectedEvent.eventName}</Text>
      <Text style={styles.eventDesc}>{props.selectedEvent.eventDesc}</Text>
    </View>
    <View style={styles.trashContainer}>
      <TouchableOpacity>
        <Icon size={30} name="ios-trash" color="red" onPress={props.onItemDeleted}/>
      </TouchableOpacity>
    </View>
  </ScrollView>
  );
};

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

export default eventDetail