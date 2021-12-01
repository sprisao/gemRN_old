import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EventsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>EventsScreen</Text>
    </View>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
