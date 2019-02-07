import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listEvent = (props) => (
  <TouchableOpacity onPress={props.onEventPressed}>
    <View style={styles.eventItem}>
      <Image 
        source={props.eventImg}
        style={styles.eventImg}
        resizeMode="cover" />
      <Text>{props.eventName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  eventItem: {
    width: "100%",
    margin: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  eventImg: {
    marginRight: 7,
    width: 30,
    height: 30
  }
});

export default listEvent;