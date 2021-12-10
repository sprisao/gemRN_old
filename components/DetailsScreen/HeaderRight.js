import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderRight = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.shareBTContainer} onPress={() => {}}>
        <Ionicons name='share-outline' size={26} color='black' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bookmarkBTContainer} onPress={() => {}}>
        <Ionicons name='bookmark-outline' size={26} color='black' />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shareBTContainer: {
    marginRight: 13,
  },
  bookmarkBTContainer: {},
});
