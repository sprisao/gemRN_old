import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Video } from 'expo-av';

import AppLoading from 'expo-app-loading';

import HomeButton2x1 from '../components/HomeScreen/HomeButton2x1';
import HomeButton4x1 from '../components/HomeScreen/HomeButton4x1';
import HomeButton1x1 from '../components/HomeScreen/HomeButton1x1';
import Footer from '../components/Footer';
import Separator from '../components/Separator';

import Header from '../components/Header';

import { useGlobalContext } from '../Context';
const HomeScreen = (props) => {
  const { secondLoading } = useGlobalContext();

  if (secondLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>로딩중이쥐롱</Text>
      </View>
    );
  }

  return (
    <>
      <Header />
      <ScrollView
        style={styles.homeScreen}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.homeScreen_Categories}>
          <View style={styles.homeButton_Container}>
            <HomeButton2x1
              CategoryId={'recxEYsUuSaVk3ge2'}
              Category={'맛집'}
              Desc={'검색없이 바로찾는 원주맛집!'}
              imageUrl={require('../assets/images/emojis/restaurants.png')}
              onSelect={() => {
                props.navigation.navigate({
                  routeName: 'SecondSelect',
                  params: {
                    categoryName: '맛집',
                    categoryId: 'recxEYsUuSaVk3ge2',
                  },
                });
              }}
            />
            <HomeButton2x1
              CategoryId={'rec1nohULLWQVqXZD'}
              Category={'카페'}
              Desc={'원주의 모든 카페를 한 눈에!'}
              imageUrl={require('../assets/images/emojis/cafe.png')}
              onSelect={() => {
                props.navigation.navigate({
                  routeName: 'SecondSelect',
                  params: {
                    categoryName: '카페',
                    categoryId: 'rec1nohULLWQVqXZD',
                  },
                });
              }}
            />
          </View>
          <View style={styles.homeButton_Container}>
            <View style={styles.buttonWrapper}>
              <HomeButton4x1
                CategoryId={'rectbHPCk3LZzfu6w'}
                Category={'호프·주점'}
                imageUrl={require('../assets/images/emojis/pub.png')}
                onSelect={() => {
                  props.navigation.navigate({
                    routeName: 'SecondSelect',
                    params: {
                      categoryName: '호프·주점',
                      categoryId: 'rectbHPCk3LZzfu6w',
                    },
                  });
                }}
              />
              <HomeButton4x1
                CategoryId={'recTQQfv194uE5O1K'}
                Category={'운동·헬스'}
                imageUrl={require('../assets/images/emojis/gym.png')}
                onSelect={() => {
                  props.navigation.navigate({
                    routeName: 'SecondSelect',
                    params: {
                      categoryName: '운동·헬스',
                      categoryId: 'recTQQfv194uE5O1K',
                    },
                  });
                }}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <HomeButton4x1
                CategoryId={'recse3cQXji2BWlNu'}
                Category={'미용·뷰티'}
                imageUrl={require('../assets/images/emojis/beauty.png')}
                onSelect={() => {
                  props.navigation.navigate({
                    routeName: 'SecondSelect',
                    params: {
                      categoryName: '미용·뷰티',
                      categoryId: 'recse3cQXji2BWlNu',
                    },
                  });
                }}
              />
              <HomeButton4x1
                CategoryId={'recqOzD4oznYyHeXS'}
                Category={'스튜디오'}
                imageUrl={require('../assets/images/emojis/studio.png')}
                onSelect={() => {
                  props.navigation.navigate({
                    routeName: 'SecondSelect',
                    params: {
                      categoryName: '스튜디오',
                      categoryId: 'recqOzD4oznYyHeXS',
                    },
                  });
                }}
              />
            </View>
          </View>
          <View style={styles.homeButton_Container}>
            <View style={styles.buttonWrapper}>
              <HomeButton4x1
                CategoryId={'rec9dQcEElsgcAsD7'}
                Category={'반려동물'}
                imageUrl={require('../assets/images/emojis/pets.png')}
                onSelect={() => {
                  props.navigation.navigate({
                    routeName: 'SecondSelect',
                    params: {
                      categoryName: '반려동물',
                      categoryId: 'rec9dQcEElsgcAsD7',
                    },
                  });
                }}
              />
              <HomeButton4x1
                CategoryId={'recoF9HKKfA3ZSxSP'}
                Category={'꽃'}
                imageUrl={require('../assets/images/emojis/flowershop.png')}
                onSelect={() => {
                  props.navigation.navigate({
                    routeName: 'SecondSelect',
                    params: {
                      categoryName: '꽃',
                      categoryId: 'recoF9HKKfA3ZSxSP',
                    },
                  });
                }}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <HomeButton4x1
                CategoryId={'recXj7vVqBBJttGd8'}
                Category={'키즈'}
                imageUrl={require('../assets/images/emojis/kids.png')}
                onSelect={() => {
                  props.navigation.navigate({
                    routeName: 'SecondSelect',
                    params: {
                      categoryName: '키즈',
                      categoryId: 'recXj7vVqBBJttGd8',
                    },
                  });
                }}
              />
              <HomeButton4x1
                CategoryId={'recz1ftDhPT8VADjf'}
                Category={'교육·학원'}
                imageUrl={require('../assets/images/emojis/education.png')}
                onSelect={() => {
                  props.navigation.navigate({
                    routeName: 'SecondSelect',
                    params: {
                      categoryName: '교육·학원',
                      categoryId: 'recz1ftDhPT8VADjf',
                    },
                  });
                }}
              />
            </View>
          </View>
          <View style={styles.homeButton_Container}>
            <HomeButton1x1
              Category={'가볼만한 곳'}
              Desc={'관광, 레져, 인생샷 스팟까지 한눈에!'}
              imageUrl={require('../assets/images/emojis/sightseeing.png')}
              onSelect={() => {
                props.navigation.navigate({
                  routeName: 'SecondSelect',
                  params: {
                    categoryName: '가볼만한 곳',
                    categoryId: ' ',
                  },
                });
              }}
            />
          </View>
        </View>

        <View style={styles.promotionSection}>
          <View style={styles.promotionWrapper}>
            <Video
              style={styles.video}
              // source={{ uri: promotions[3].promotionMedia[0].url }}
              resizeMode='cover'
              rate={1}
              shouldPlay={true}
              isLooping={true}
              muted={true}
            />
            <View style={styles.promoCover}>
              <View style={styles.promoHeader}>
                <Text style={styles.promoHeaderText}>젬 큐레이션</Text>
              </View>
              <View style={styles.promoArticle}>
                <Text style={styles.promoArticleDescText}>
                  이화마을과 단계동 사이 위치한 감각적인 공간
                </Text>
                <Text style={styles.promoArticleNameText}>Neukölln</Text>
                <Text style={styles.promoArticleDescText}>-</Text>
                <Text style={styles.promoArticleMoreText}>더 알아보기</Text>
              </View>
            </View>
          </View>
        </View>
        <Separator />
        <Footer />
      </ScrollView>
    </>
  );
};

HomeScreen.navigationOptions = (navigationData) => {
  return {
    headerShown: false,
  };
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  homeScreen_Categories: {
    paddingHorizontal: 13,
  },
  homeButton_Container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    overflow: 'hidden',
  },

  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '48.5%',
  },

  promotionSection: {
    paddingHorizontal: 13,
  },

  promotionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 14,
    overflow: 'hidden',
    width: '100%',
    height: 200,
    // marginBottom: 100,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 200,
  },

  promoCover: {
    width: '100%',
    height: '100%',
    padding: 13,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  promoHeaderText: {
    fontFamily: 'notoSans-Bold',
    fontSize: 18,
    color: 'white',
    includeFontPadding: false,
  },

  promoArticle: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoArticleNameText: {
    fontSize: 15,
    fontFamily: 'notoSans-Medium',
    color: 'white',
    includeFontPadding: false,
  },
  promoArticleDescText: {
    fontSize: 14,
    fontFamily: 'notoSans-Regular',
    color: 'white',
    includeFontPadding: false,
  },
  promoArticleMoreText: {
    fontSize: 13,
    fontFamily: 'notoSans-Light',
    color: 'white',
    includeFontPadding: false,
    textDecorationLine: 'underline',
  },
});
