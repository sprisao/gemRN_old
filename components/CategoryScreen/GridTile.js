import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import FastImage from 'react-native-fast-image';

const GridTile = (props) => {
  let preRank;
  if (props.rating > 8) {
    preRank = <Text>🏅🏅🏅</Text>;
  } else if (props.rating > 6) {
    preRank = <Text>🏅🏅</Text>;
  } else if (props.rating > 3) {
    preRank = <Text>🏅</Text>;
  } else preRank = null;

  let businessHour;
  if (props.openHour) {
    businessHour = (
      <Text>
        {props.openHour} ~ {props.closeHour}
      </Text>
    );
  }

  return (
    <View style={{ ...styles.gridTile, ...props.style }}>
      <TouchableOpacity
        style={{
          flex: 1,
          width: props.touchableValue,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={props.onSecondSelect}
      >
        <View style={styles.tileWrapper}>
          <FastImage
            style={styles.image}
            resizeMode={FastImage.resizeMode.cover}
            source={{ uri: props.image }}
          />
          <View style={styles.articleContainer}>
            <Text style={styles.desc}>{props.desc}</Text>
            <Text style={styles.name}>{props.name}</Text>
            <Text>{props.location}</Text>
            {preRank}
            {businessHour}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GridTile;

const styles = StyleSheet.create({
  gridTile: {
    width: '47%',
    // maxHeight: 300,
    margin: 5,
    overflow: 'hidden',
  },
  tileWrapper: {
    width: '100%',
    height: '100%',
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 7,
    resizeMode: 'cover',
  },
  articleContainer: {
    marginTop: 10,
    height: 120,
    width: '100%',
  },
  name: {
    fontFamily: 'notoSans-Regular',
    letterSpacing: -0.35,
    fontSize: 20,
    marginTop: 0,
    includeFontPadding: false,
  },
  desc: {
    lineHeight: 13,
    fontSize: 13,
    letterSpacing: -0.35,
    includeFontPadding: false,
  },
});
