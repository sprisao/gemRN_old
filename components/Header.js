import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/styleSettings/colors';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>젬</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 145,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  headerTitle: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'notoSans-Black',
  },
});
