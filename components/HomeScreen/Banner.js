import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Banner = (props) => {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>이 곳에 광고해보세요!</Text>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 75,
    backgroundColor: 'blue',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  bannerText: {
    color: 'white',
  },
});
