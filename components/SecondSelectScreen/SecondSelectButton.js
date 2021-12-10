import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../../constants/styleSettings/colors';

const SecondSelectButton = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.gridItem, ...props.style }}
      onPress={props.onSecondSelect}
    >
      <View style={styles.buttonWrapper}>
        <Text style={styles.buttonEmoji}>{props.emoji}</Text>
        <Text>{props.title}</Text>
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
    borderWidth: 1.25,
    borderColor: colors.borderColor,
    backgroundColor: colors.backgroundColor,
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
