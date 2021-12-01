import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>DetailsScreen</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
