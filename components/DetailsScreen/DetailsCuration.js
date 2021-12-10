import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';

const DetailsCuration = (props) => {
  const deviceWidth = Dimensions.get('window').width;
  const curationWidth = storeData.curation[0].width;
  const curationHeight = storeData.curation[0].height;
  const theScale = curationWidth / deviceWidth;
  const scaledHeight = curationHeight / theScale;

  return (
    <View style={styles.detailsCuration}>
      <View style={styles.detailsCurationWrapper}>
        <Text style={styles.detailsCurationHeader}>큐레이션</Text>
      </View>
      <View style={styles.curationContainer}>
        <FastImage
          source={{ uri: storeData.curation[0].url }}
          style={{
            width: Dimensions.get('window').width,
            height: scaledHeight,
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </View>
    </View>
  );
};

export default DetailsCuration;

const styles = StyleSheet.create({
  detailsCurationWrapper: { flex: 1, width: '100%', paddingHorizontal: 10 },
  detailsCurationHeader: {
    fontFamily: 'notoSans-Bold',
    fontSize: 22,
    marginVertical: 7,
    letterSpacing: -1,
  },
  curationContainer: {
    width: '100%',
  },
});
