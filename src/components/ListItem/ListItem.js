import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const listEvent = (props) => (
  <TouchableOpacity onPress={props.onEventPressed}>
    <View style={styles.eventItem}>
      <Text>{props.eventName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  eventItem: {
    width: "100%",
    margin: 5,
    padding: 10,
    backgroundColor: "#eee"
  }
});

export default listEvent;