import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../../constants/styleSettings/colors';

const SecondSelectButton = (props) => {
  console.log('SecondSelect', props);
  return (
    <View style={{ ...styles.gridItem, ...props.style }}>
      <TouchableOpacity
        style={{
          flex: 1,
          width: props.touchableValue,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={props.onSecondSelect}
      >
        <View style={styles.buttonWrapper}>
          <Text>{props.emoji}</Text>
          <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SecondSelectButton;

const styles = StyleSheet.create({
  gridItem: {
    width: '47%',
    margin: 5,
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1.25,
    borderColor: colors.borderColor,
    backgroundColor: colors.backgroundColor,
  },
  buttonWrapper: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
});
