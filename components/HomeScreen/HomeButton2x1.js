import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const HomeButton2x1 = (props) => {
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
            style={{ marginLeft: -19, marginRight: -13 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeButton2x1;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderRadius: 11.5,
    borderWidth: 1,
    borderColor: '#dfdfdf',
    backgroundColor: '#f3f3f3',
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '48.5%',
    height: 180,
  },
  imageContainer: {
    width: 85,
    height: 85,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  homeBT_1_Header: {
    fontSize: 35,
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
    alignItems: 'flex-end',
  },
  pgContainer: {
    width: 30,
  },
  paragraph: {
    fontFamily: 'SD-UL',
    lineHeight: 15.5,
    fontSize: 13,
    marginBottom: 5,
    textAlign: 'right',
  },
  homeBT_1_emoji: {
    // position: 'absolute',
    // left: '45%',
    // top: 10,
    width: '100%',
    height: '100%',
  },
});
