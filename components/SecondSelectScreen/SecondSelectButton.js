import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SecondSelectButton = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.gridItem, ...props.style }}
      onPress={props.onSecondSelect}
    >
      <View style={styles.buttonWrapper}>
        <Text style={styles.buttonEmoji}>{props.emoji}</Text>
        <Text>{props.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SecondSelectButton;

const styles = StyleSheet.create({
  gridItem: {
    margin: 5,
    width: '47%',
    height: 'auto',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#dfdfdf',
    backgroundColor: '#f8f8f8',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 12,
  },
  buttonEmoji: {
    marginRight: 5,
  },
});
