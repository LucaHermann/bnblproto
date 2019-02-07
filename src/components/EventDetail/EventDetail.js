import React from 'react'
import { Modal, View, Image, Text, Button } from 'react-native'

const eventDetail = (props) => (
  <Modal>
    <View>
      <Image source={props.eventImage} />
      <Text>{props.eventName}</Text>
      <View>
        <Button />
        <Button />
      </View>
    </View>
  </Modal>
);

export default eventDetail