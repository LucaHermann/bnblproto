import React, { Component } from 'react';
import { 
  View, 
  Image, 
  Button, 
  StyleSheet
} from 'react-native';
import ImagePicker from 'react-native-image-picker';


class PickImage extends Component {
  state = {
    pickedImage: null
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: "Pick Image"}, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error)
      } else {
        this.setState({
          pickedImage: {uri: res.uri}
        })
      }
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
        <Image source={this.state.pickedImage} style={styles.imagePreview} />
      </View>
      <View style={styles.button}>
        <Button title="Pick image" onPress={this.pickImageHandler} />
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
  },
  imagePreview: {
    width: "100%",
    height: "100%"
  }
});

export default PickImage;