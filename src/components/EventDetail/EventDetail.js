import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const eventDetail = (props) => {
  let modalContent = null;

  if (props.selectedEvent) {
    modalContent = ( 
      <View>
        <Image 
          source={props.selectedEvent.eventImage} 
          style={styles.eventImage} />
        <Text style={styles.eventName}>{props.selectedEvent.eventName}</Text>
      </View>
    );
  }

  return (
    <Modal 
      visible={props.selectedEvent !== null}
      animationType="slide">
    <View style={styles.modalContainer}>
      {modalContent}
        <View>
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          <Button title="Close" color="#9d4cff" onPress={props.onModalClosed} />
        </View>
    </View>
  </Modal>
  );
};

styles = StyleSheet.create({
  modalContainer: {
    margin: 25
  },
  eventImage: {
    width: "100%",
    height: 250
  },
  eventName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default eventDetail