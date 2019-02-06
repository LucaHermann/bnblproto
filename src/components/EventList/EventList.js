import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from './../ListItem/ListItem';

const eventList = (props) => {
  return (
    <FlatList 
      style={styles.eventListContainer}
      data={props.events} 
      renderItem={(info) => (
        <ListItem
          eventName={info.item.val}
          onEventPressed={() => props.onEventDeleted(id)} />
      )} />
  );
};

const styles = StyleSheet.create({
  eventListContainer: {
    width: "100%"
  }
});

export default eventList;