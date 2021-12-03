import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useGlobalContext } from '../../../Context';
const Res_Sec_Bun = (props) => {
  const { restaurants } = useGlobalContext();
  return (
    <View style={styles.screen}>
      <Text>EventsScreen</Text>
    </View>
  );
};

export default Res_Sec_Bun;

const styles = StyleSheet.create({});
