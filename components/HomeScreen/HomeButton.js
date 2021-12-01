import React from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';

const HomeButton = (props) => {
  return (
    <View style={{ ...styles.homeButton, ...props.style }}>
      {props.children}
    </View>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  homeButton: {
    paddingHorizontal: 13,
    paddingTop: 8,
    borderRadius: 11.5,
    borderWidth: 0.65,
    borderColor: '#dfdfdf',
    backgroundColor: '#fdfdfd',
    overflow: 'hidden',
  },
});