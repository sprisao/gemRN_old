import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

import ImagesContainer from '../components/DetailsScreen/ImagesContainer';
import DetailsCuration from '../components/DetailsScreen/DetailsCuration';
import DetailsMenu from '../components/DetailsScreen/DetailsMenu';

import Infos from '../components/DetailsScreen/Infos';

const DetailsScreen = (props) => {
  storeData = props.route.params.storeDetails;

  let preRank;
  if (storeData.preRating > 8) {
    preRank = <Text style={styles.medals}>🏅🏅🏅</Text>;
  } else if (storeData.preRating > 6) {
    preRank = <Text style={styles.medals}>🏅🏅</Text>;
  } else if (storeData.preRating > 3) {
    preRank = <Text style={styles.medals}>🏅</Text>;
  } else preRank = null;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <View style={styles.headerDeco}></View> */}
      <View style={styles.detailHeader}>
        <View style={styles.HeaderLeft}>
          <Text style={styles.storeDesc}>{storeData.shortDescription}</Text>
          <Text style={styles.storeName}>{storeData.name}</Text>
        </View>
        <View style={styles.HeaderRight}>
          <Text>{preRank}</Text>
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
  headerDeco: {
    height: 20,
    backgroundColor: 'black',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  detailHeader: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
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
    paddingVertical: 6,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  miniAddress: {
    fontFamily: 'notoSans-Regular',
    fontSize: 16,
  },
  medals: {
    fontSize: 22,
    letterSpacing: -6,
  },
});
