import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const CurationBT = (props) => {
  const imgSource = props.imageUrl;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onSelect}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.homeBT_1_emoji}
          resizeMode='cover'
          source={props.imageUrl}
        />
      </View>
      <View style={styles.articleContainer}>
        <View sryle={styles.pgContainer}>
          <Text style={styles.paragraph}>{props.Desc}</Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.homeBT_1_Header}>{props.Category} </Text>
          <EvilIcons
            name='chevron-right'
            size={35}
            color='black'
            style={{ marginLeft: -15, marginRight: -13 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CurationBT;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    paddingBottom: 5,
    borderRadius: 11.5,
    borderWidth: 0.65,
    borderColor: '#dfdfdf',
    backgroundColor: '#f3f3f3',
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '48.5%',
    height: 76,
  },
  imageContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 45,
    height: 45,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBT_1_Header: {
    fontSize: 23,
    fontFamily: 'blackSans',
    letterSpacing: -1.25,
    includeFontPadding: false,
    color: '#333333',
    marginBottom: -5,
  },
  articleContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  pgContainer: {
    width: 30,
  },
  paragraph: {
    fontFamily: 'SD-UL',
    lineHeight: 12,
    fontSize: 11,
    textAlign: 'left',
  },
  homeBT_1_emoji: {
    // position: 'absolute',
    // left: '45%',
    // top: 10,
    width: '100%',
    height: '100%',
  },
});
