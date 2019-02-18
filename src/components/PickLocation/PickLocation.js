import React, { Component } from 'react';
import { 
  View, 
  Image, 
  Button, 
  Text, 
  StyleSheet 
} from 'react-native';

import imageEventHolder from '../../assets/bnblSquare.jpg';

class PickLocation extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Maps</Text>
        </View>
        <View style={styles.button}>
          <Button title="Locate event/drop"  onPress={() => alert('located')} />
        </View>
      </View>
    );
  }
};

const styles= StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 7
  }
});

export default PickLocation;