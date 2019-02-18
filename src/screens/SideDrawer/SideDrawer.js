import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
  render () {
    return (
      <View style={[
        styles.container,
        {width: Dimensions.get("window").width * 0.8} 
      ]}>
        <TouchableOpacity>
          <View>
            <Icon name="ios-log-out" size={30} color="black" />
            <Text>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: "white"
  }
});

export default SideDrawer;