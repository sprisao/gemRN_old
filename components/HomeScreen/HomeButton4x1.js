import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const HomeButton4x1 = (props) => {
  return (
    <TouchableOpacity style={styles.homeButton} onPress={props.onSelect}>
      <Text style={styles.homeBT_2_Header}>{props.Category}</Text>
      <View style={styles.homeBT_2_EmojiContainer}>
        <Image
          style={styles.homeBT_2_emoji}
          resizeMode='cover'
          source={props.imageUrl}
        />
      </View>
    </TouchableOpacity>
  );
};

export default HomeButton4x1;

const styles = StyleSheet.create({
  homeButton: {
    paddingHorizontal: 13,
    paddingTop: 8,
    borderRadius: 11.5,
    borderWidth: 0.65,
    borderColor: '#dfdfdf',
    backgroundColor: '#f3f3f3',
    overflow: 'hidden',
    width: '47%',
    height: 82,
    paddingHorizontal: 8,
  },
  homeBT_2_Header: {
    fontSize: 14.5,
    fontFamily: 'notoSans-Medium',
    letterSpacing: -0.95,
    includeFontPadding: false,
  },

  homeBT_2_EmojiContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  homeBT_2_emoji: {
    position: 'absolute',
    width: 40,
    height: 40,
    left: -8,
    top: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      },
    }),
  },
});
