import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/styleSettings/colors';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerWrapper}>
        <View style={styles.searchBox}>
          <Text style={styles.searchBoxText}>어디로 떠나볼까요?</Text>
          <Feather name='search' size={28} color='#a7a7a7' />
        </View>
        <View style={styles.headerButtonContainer}>
          <FontAwesome name='user-circle' size={45} color='white' />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column-reverse',
    height: 145,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    paddingHorizontal: 14,
    paddingBottom: 14,
  },

  headerWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'notoSans-Black',
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: 53,
    padding: 10,
    backgroundColor: 'white',
    paddingHorizontal: 13,
    paddingTop: 8,
    borderRadius: 11.5,
  },

  headerButtonContainer: {
    paddingLeft: 10,
    paddingRight: 5,
  },

  searchBoxText: {
    fontFamily: 'notoSans-Thin',
  },
});
