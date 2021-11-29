import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    width: '120%',
    height: 13,
    backgroundColor: 'rgb(243, 243, 243)',
    marginTop: 40,
    marginBottom: 30,
    borderTopWidth: 1,
    borderTopColor: 'rgb(198, 198, 198)',
  },
});
