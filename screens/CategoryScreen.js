import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoryScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>CategoryScreen</Text>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
