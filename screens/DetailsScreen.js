import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

import ImagesContainer from '../components/DetailsScreen/ImagesContainer';
import DetailsHeader from '../components/DetailsScreen/DetailsHeader';
import DetailsTopTabNavi from '../components/DetailsScreen/DetailsTopTabNavi';

const DetailsScreen = (props) => {
  storeData = props.route.params.storeDetails;

  return (
    <>
      <ImagesContainer Images={storeData.images} />
      <DetailsHeader Data={storeData} />
      <DetailsTopTabNavi Data={storeData} />
    </>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  detailScreen: {
    flex: 1,
  },

  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
