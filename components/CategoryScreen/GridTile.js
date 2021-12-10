import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Feather } from '@expo/vector-icons';

const GridTile = (props) => {
  let preRank;
  if (props.rating > 8) {
    preRank = (
      <View style={styles.medalContainer}>
        <Text style={styles.medals}>🏅🏅🏅</Text>
      </View>
    );
  } else if (props.rating > 6) {
    preRank = (
      <View style={styles.medalContainer}>
        <Text style={styles.medals}>🏅🏅</Text>
      </View>
    );
  } else if (props.rating > 3) {
    preRank = (
      <View style={styles.medalContainer}>
        <Text style={styles.medals}>🏅</Text>
      </View>
    );
  } else preRank = null;

  let businessHour;
  if (props.openHour) {
    businessHour = (
      <View style={styles.hourContainer}>
        <Feather name='clock' size={13} color='black' />
        <Text style={styles.businessHour}>
          {props.openHour} ~ {props.closeHour}
        </Text>
      </View>
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
            <View style={styles.nameContainer}>
              <Text>{props.location}</Text>
              <Text style={styles.name}>{props.name}</Text>
            </View>
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
    marginHorizontal: 5,
    marginBottom: 8,
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
    flexDirection: 'column',
    marginTop: 5,
    height: 'auto',
    width: '100%',
  },
  nameContainer: {
    marginBottom: 3,
  },
  name: {
    letterSpacing: -0.35,
    fontSize: 20,
    marginTop: 4,
  },
  medalContainer: { marginVertical: 5 },
  medals: {
    fontSize: 14,
    letterSpacing: -5,
    marginLeft: -4,
  },
  hourContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
  },
  businessHour: {
    marginLeft: 3,
  },
});
