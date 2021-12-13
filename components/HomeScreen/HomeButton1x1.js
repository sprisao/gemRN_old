import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';

const HomeButton1x1 = (props) => {
  return (
    <TouchableOpacity style={styles.homeButton} onPress={props.onSelect}>
      <View>
        <Text style={styles.homeBT_3_Header}>{props.Category}</Text>
        <View style={styles.homeBT_3_Article}>
          <Text style={styles.homeBT_3_Paragraph}>{props.Desc}</Text>
        </View>
      </View>
      <View style={styles.homeBT_3_EmojiContainer}>
        <Image
          style={styles.homeBT_3_emoji}
          resizeMode='cover'
          source={props.imageUrl}
        />
      </View>
    </TouchableOpacity>
  );
};

export default HomeButton1x1;

const styles = StyleSheet.create({
  homeButton: {
    paddingHorizontal: 13,
    paddingTop: 8,
    borderRadius: 11.5,
    borderWidth: 0.65,
    borderColor: '#dfdfdf',
    backgroundColor: '#f3f3f3',
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    padding: 10,
  },
  homeBT_3_Header: {
    fontSize: 24,
    fontFamily: 'blackSans',
    letterSpacing: -0.8,
    includeFontPadding: false,
    color: '#333333',
  },

  homeBT_3_Article: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 2,
  },

  homeBT_3_Paragraph: {
    fontFamily: 'notoSans-Light',
    lineHeight: 20,
    fontSize: 13,
  },
  homeBT_3_EmojiContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },

  homeBT_3_emoji: {
    position: 'absolute',
    width: 80,
    height: 80,
    left: -5,
    top: 0,
  },
});
