import React from 'react';
import { StyleSheet, Text } from 'react-native';

const BodyText = (props) => {
  return <Text style={styles.bodyText}>{props.children}</Text>;
};

export default BodyText;

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: 'notoSans-Regular',
    fontSize: 13.5,
    letterSpacing: -0.35,
    includeFontPadding: false,
  },
});
