import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetailsHeader = (props) => {
  return (
    <View style={styles.detailHeaderContainer}>
      <View style={styles.detailHeaderWrapper}>
        <Text style={styles.detailsHeader_Desc}>
          {storeData.shortDescription}
        </Text>
        <Text style={styles.detailsHeader_Name}>{storeData.name}</Text>
        <Text style={styles.detailsHeader_miniAddress}>
          {storeData.miniAddress}
        </Text>
      </View>
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  detailHeaderContainer: {
    width: '100%',
    padding: 12,
    position: 'absolute',
    top: 320,
  },
  detailHeaderWrapper: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 10,
    borderRadius: 10,
  },
  detailsHeader_Desc: {
    fontFamily: 'notoSans-Light',
    color: 'white',
  },
  detailsHeader_Name: {
    fontSize: 22,
    fontFamily: 'notoSans-Medium',
    color: 'white',
  },

  detailsHeader_miniAddress: { fontFamily: 'notoSans-Regular', color: 'white' },
});
