import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listEvent = (props) => (
  <TouchableOpacity onPress={props.onEventPressed}>
    <View style={styles.eventItem}>
      <Image 
        source={props.eventImg}
        style={styles.eventImg}
        resizeMode="cover" />
      <Text style={styles.textFont}>{props.eventName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  eventItem: {
    width: "100%",
    padding: 7,
    marginTop: 5,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  eventImg: {
    width: 30,
    height: 30
  },
  textFont: {
    marginLeft: 15,
    marginTop: 4,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17
  }
});

export default listEvent;