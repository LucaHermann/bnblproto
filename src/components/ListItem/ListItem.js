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
    padding: 10,
    marginTop: 5,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  eventImg: {
    width: 30,
    height: 30
  }
});

export default listEvent;