import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

import ImagesContainer from '../components/DetailsScreen/ImagesContainer';
import DetailsCuration from '../components/DetailsScreen/DetailsCuration';
import DetailsMenu from '../components/DetailsScreen/DetailsMenu';

import Infos from '../components/DetailsScreen/Infos';

const DetailsScreen = (props) => {
  storeData = props.route.params.storeDetails;

  return (
    <ScrollView>
      <View style={styles.detailHeader}>
        <View style={styles.HeaderLeft}>
          <Text style={styles.storeDesc}>{storeData.shortDescription}</Text>
          <Text style={styles.storeName}>{storeData.name}</Text>
        </View>
        <View style={styles.HeaderRight}>
          <Text style={styles.miniAddress}>{storeData.miniAddress}</Text>
        </View>
      </View>
      <ImagesContainer Images={storeData.images} />
      {storeData.isPromotion ? <DetailsCuration Data={storeData} /> : null}
      {storeData.isMenu ? <DetailsMenu Data={storeData} /> : null}

      <Infos Data={storeData} />
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  detailScreen: {
    flex: 1,
  },
  detailHeader: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopColor: '#ccc',
    borderTopWidth: 1.25,
  },
  HeaderLeft: {
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    justifyContent: 'space-between',
  },
  storeDesc: {
    fontFamily: 'notoSans-Regular',
    fontSize: 16,
    letterSpacing: -1,
  },

  storeName: {
    fontFamily: 'notoSans-Bold',
    fontSize: 32,
    letterSpacing: -1.5,
  },
  HeaderRight: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  miniAddress: {
    fontFamily: 'notoSans-Regular',
    fontSize: 16,
  },
});
