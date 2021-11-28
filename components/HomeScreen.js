import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeButton from './HomeButton';

const HomeScreen = (props) => {
  return (
    <View style={styles.homeScreen}>
      <View style={styles.homeButton_Container}>
        <HomeButton style={styles.homeBT_1}>
          <Text style={styles.homeBT_1_Header}>맛집</Text>
          <View style={styles.homeBT_1_Article}>
            <Text style={styles.homeBT_1_Paragraph}>
              검색없이 바로찾는 {'\n'}원주맛집!
            </Text>
          </View>
          <View style={styles.homeBT_1_EmojiContainer}>
            <Image
              style={styles.homeBT_1_emoji}
              resizeMode='cover'
              source={require('../assets/images/emojis/restaurants.png')}
            />
          </View>
        </HomeButton>
        <HomeButton style={styles.homeBT_1}>
          <Text style={styles.homeBT_1_Header}>카페</Text>
          <View style={styles.homeBT_1_Article}>
            <Text style={styles.homeBT_1_Paragraph}>
              원주의 '거의'{'\n'}모든 카페를 한 눈에!
            </Text>
          </View>
          <View style={styles.homeBT_1_EmojiContainer}>
            <Image
              style={styles.homeBT_1_emoji}
              resizeMode='cover'
              source={require('../assets/images/emojis/cafe.png')}
            />
          </View>
        </HomeButton>
      </View>
      <View style={styles.homeButton_Container}>
        <View style={styles.buttonWrapper}>
          <HomeButton style={styles.homeBT_2}>
            <Text style={styles.homeBT_2_Header}>호프·주점</Text>
            <View style={styles.homeBT_2_EmojiContainer}>
              <Image
                style={styles.homeBT_2_emoji}
                resizeMode='cover'
                source={require('../assets/images/emojis/pub.png')}
              />
            </View>
          </HomeButton>
          <HomeButton style={styles.homeBT_2}>
            <Text style={styles.homeBT_2_Header}>운동·헬스</Text>
            <View style={styles.homeBT_2_EmojiContainer}>
              <Image
                style={styles.homeBT_2_emoji}
                resizeMode='cover'
                source={require('../assets/images/emojis/gym.png')}
              />
            </View>
          </HomeButton>
        </View>
        <View style={styles.buttonWrapper}>
          <HomeButton style={styles.homeBT_2}>
            <Text style={styles.homeBT_2_Header}>미용·뷰티</Text>
            <View style={styles.homeBT_2_EmojiContainer}>
              <Image
                style={styles.homeBT_2_emoji}
                resizeMode='cover'
                source={require('../assets/images/emojis/beauty.png')}
              />
            </View>
          </HomeButton>
          <HomeButton style={styles.homeBT_2}>
            <Text style={styles.homeBT_2_Header}>스튜디오</Text>
            <View style={styles.homeBT_2_EmojiContainer}>
              <Image
                style={styles.homeBT_2_emoji}
                resizeMode='cover'
                source={require('../assets/images/emojis/studio.png')}
              />
            </View>
          </HomeButton>
        </View>
      </View>
      <View style={styles.homeButton_Container}>
        <View style={styles.buttonWrapper}>
          <HomeButton style={styles.homeBT_2}>
            <Text style={styles.homeBT_2_Header}>반려동물</Text>
            <View style={styles.homeBT_2_EmojiContainer}>
              <Image
                style={styles.homeBT_2_emoji}
                resizeMode='cover'
                source={require('../assets/images/emojis/pets.png')}
              />
            </View>
          </HomeButton>
          <HomeButton style={styles.homeBT_2}>
            <Text style={styles.homeBT_2_Header}>꽃</Text>
            <View style={styles.homeBT_2_EmojiContainer}>
              <Image
                style={styles.homeBT_2_emoji}
                resizeMode='cover'
                source={require('../assets/images/emojis/flowershop.png')}
              />
            </View>
          </HomeButton>
        </View>
        <View style={styles.buttonWrapper}>
          <HomeButton style={styles.homeBT_2}>
            <Text style={styles.homeBT_2_Header}>키즈</Text>
            <View style={styles.homeBT_2_EmojiContainer}>
              <Image
                style={styles.homeBT_2_emoji}
                resizeMode='cover'
                source={require('../assets/images/emojis/kids.png')}
              />
            </View>
          </HomeButton>
          <HomeButton style={styles.homeBT_2}>
            <Text style={styles.homeBT_2_Header}>교육·학원</Text>
            <View style={styles.homeBT_2_EmojiContainer}>
              <Image
                style={styles.homeBT_2_emoji}
                resizeMode='cover'
                source={require('../assets/images/emojis/education.png')}
              />
            </View>
          </HomeButton>
        </View>
      </View>
      <View style={styles.homeButton_Container}>
        <HomeButton style={styles.homeBT_3}>
          <View>
            <Text style={styles.homeBT_3_Header}>가볼만한 곳</Text>
            <View style={styles.homeBT_3_Article}>
              <Text style={styles.homeBT_3_Paragraph}>
                관광, 레져, 인생샷 스팟까지 한눈에!
              </Text>
            </View>
          </View>
          <View style={styles.homeBT_3_EmojiContainer}>
            <Image
              style={styles.homeBT_3_emoji}
              resizeMode='cover'
              source={require('../assets/images/emojis/sightseeing.png')}
            />
          </View>
        </HomeButton>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    width: '100%',
    paddingHorizontal: 13,
  },
  homeButton_Container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  homeBT_1: {
    flexDirection: 'column',
    width: '48.5%',
    height: 190,
    paddingTop: 10,
  },
  homeBT_2: {
    width: '47%',
    height: 82,
    paddingHorizontal: 8,
  },
  homeBT_3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    padding: 10,
  },

  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '48.5%',
  },

  homeBT_1_Header: {
    fontSize: 30,
    fontFamily: 'notoSans-Bold',
    letterSpacing: -0.35,
    includeFontPadding: false,
  },
  homeBT_2_Header: {
    fontSize: 14.5,
    fontFamily: 'notoSans-Medium',
    letterSpacing: -0.95,
    includeFontPadding: false,
  },
  homeBT_3_Header: {
    fontSize: 18,
    fontFamily: 'notoSans-Bold',
    letterSpacing: -0.35,
    includeFontPadding: false,
  },

  homeBT_1_Article: {
    width: '100%',
    marginTop: 2,
  },
  homeBT_3_Article: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 2,
  },

  homeBT_1_Paragraph: {
    fontFamily: 'notoSans-Light',
    lineHeight: 18.5,
    fontSize: 13,
  },
  homeBT_3_Paragraph: {
    fontFamily: 'notoSans-Light',
    lineHeight: 20,
    fontSize: 13,
  },

  homeBT_1_EmojiContainer: {
    flexDirection: 'row-reverse',
    width: '100%',
    height: 40,
  },
  homeBT_2_EmojiContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  homeBT_3_EmojiContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  homeBT_1_emoji: {
    position: 'absolute',
    left: -15,
    top: 5,
    width: 100,
    height: 100,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      android: { elevation: 5 },
    }),
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
      android: { elevation: 5 },
    }),
  },

  homeBT_3_emoji: {
    position: 'absolute',
    width: 80,
    height: 80,
    left: -5,
    top: 0,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
      },
      android: { elevation: 3 },
    }),
  },
});
