import React from 'react';
import { StyleSheet, View } from 'react-native';

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
    borderWidth: 1.25,
    borderColor: '#dfdfdf',
    backgroundColor: '#efefef',
    overflow: 'hidden',
  },
});
