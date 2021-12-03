import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';

const HomeButton2x1 = (props) => {
  const imgSource = props.imageUrl;
  return (
    <TouchableOpacity style={styles.homeButton} onPress={props.onSelect}>
      <Text style={styles.homeBT_1_Header}>{props.Category}</Text>
      <View style={styles.homeBT_1_Article}>
        <Text style={styles.homeBT_1_Paragraph}>{props.Desc}</Text>
      </View>
      <View style={styles.homeBT_1_EmojiContainer}>
        <Image
          style={styles.homeBT_1_emoji}
          resizeMode='cover'
          source={props.imageUrl}
        />
      </View>
    </TouchableOpacity>
  );
};

export default HomeButton2x1;

const styles = StyleSheet.create({
  homeButton: {
    paddingHorizontal: 13,
    paddingTop: 8,
    borderRadius: 11.5,
    borderWidth: 0.65,
    borderColor: '#dfdfdf',
    backgroundColor: '#f3f3f3',
    overflow: 'hidden',
    flexDirection: 'column',
    width: '48.5%',
    height: 190,
    paddingTop: 10,
  },
  homeBT_1_Header: {
    fontSize: 30,
    fontFamily: 'notoSans-Bold',
    letterSpacing: -0.35,
    includeFontPadding: false,
  },
  homeBT_1_Article: {
    width: '80%',
    height: '20%',
    marginTop: 2,
  },
  homeBT_1_Paragraph: {
    fontFamily: 'notoSans-Light',
    lineHeight: 15.5,
    fontSize: 13,
  },
  homeBT_1_emoji: {
    position: 'absolute',
    left: '45%',
    top: 10,
    width: 100,
    height: 100,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
    }),
  },
});
