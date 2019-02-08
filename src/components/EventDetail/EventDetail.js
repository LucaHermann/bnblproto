import React from 'react';
import { Modal, View, ScrollView ,Image, Text, Button, StyleSheet } from 'react-native';

const eventDetail = (props) => {
  let modalContent = null;

  if (props.selectedEvent) {
    modalContent = ( 
      <View>
        <Image 
          source={props.selectedEvent.eventImage} 
          style={styles.eventImage} />
        <Text style={styles.eventName}>{props.selectedEvent.eventName}</Text>
        <Text style={styles.eventDesc}>{props.selectedEvent.eventDesc}</Text>
      </View>
    );
  }


  return (
    <Modal 
      visible={props.selectedEvent !== null}
      animationType="slide">
    <ScrollView style={styles.modalContainer}>
      {modalContent}
      {}
        <View style={styles.buttonContainer}>
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          <Button title="Close" color="#9d4cff" onPress={props.onModalClosed} />
        </View>
    </ScrollView>
  </Modal>
  );
};

styles = StyleSheet.create({
  modalContainer: {
    margin: 25
  },
  buttonContainer: {
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