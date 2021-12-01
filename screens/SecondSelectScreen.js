import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SecondSelectScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>SecondSelectScreen</Text>
    </View>
  );
};

export default SecondSelectScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
