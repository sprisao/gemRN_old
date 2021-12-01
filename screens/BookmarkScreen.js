import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BookmarkScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>BookmarkScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookmarkScreen;
