import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

import HomeButton2x1 from '../components/HomeScreen/HomeButton2x1';
import HomeButton4x1 from '../components/HomeScreen/HomeButton4x1';
import Banner from '../components/HomeScreen/Banner';
import SightseeingBT from '../components/HomeScreen/SightseeingBT';
import CurationBT from '../components/HomeScreen/CurationBT';
import Footer from '../components/Footer';
import Separator from '../components/Separator';

import HomeHeader from '../components/HomeScreen/HomeHeader';

import { useGlobalContext } from '../Context';

const HomeScreen = (props) => {
  const { cafesLoading } = useGlobalContext();

  if (cafesLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>로딩중이쥐롱</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <ScrollView
        style={styles.homeScreen}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader navigation={props.navigation} onTab={() => {}} />
        <View style={styles.homeScreen_Categories}>
          <View style={styles.homeButton_Container}>
            <HomeButton2x1
              CategoryId={'recxEYsUuSaVk3ge2'}
              Category={'맛집'}
              Desc={'검색없이 한번에\n바로찾는 원주맛집!'}
              imageUrl={require('../assets/images/emojis/restaurants.png')}
              onSelect={() => {
                props.navigation.navigate({
                  name: '테스트',
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
              Desc={'원주의 \n모든 카페를 한 눈에!'}
              imageUrl={require('../assets/images/emojis/cafe.png')}
              onSelect={() => {
                props.navigation.navigate({
                  name: 'SecondSelect',
                  params: {
                    categoryName: '카페',
                    categoryId: 'rec1nohULLWQVqXZD',
                  },
                });
              }}
            />
          </View>
          <View style={styles.homeButton_Container}>
            <SightseeingBT
              Category={'가볼만한 곳'}
              Desc={'관광, 레져,\n인생샷 스팟까지 한눈에!'}
              imageUrl={require('../assets/images/emojis/sightseeing.png')}
              onSelect={() => {
                props.navigation.navigate({
                  name: 'SpotSelect',
                  params: {
                    categoryName: '가볼만한 곳',
                  },
                });
              }}
            />
            <CurationBT
              Category={'젬 큐레이션'}
              Desc={'젬이 소개하는\n보석같은 장소들'}
              imageUrl={require('../assets/images/emojis/curation.png')}
              onSelect={() => {
                props.navigation.navigate({
                  name: 'Curations',
                });
              }}
            />
          </View>
          <Banner></Banner>
          <View style={styles.homeButton_Container}>
            <View style={styles.buttonWrapper}>
              <HomeButton4x1
                CategoryId={'rectbHPCk3LZzfu6w'}
                Category={'호프주점'}
                imageUrl={require('../assets/images/emojis/pub.png')}
                onSelect={() => {
                  props.navigation.navigate({
                    name: 'SecondSelect',
                    params: {
                      categoryName: '호프・주점',
                      categoryId: 'rectbHPCk3LZzfu6w',
                    },
                  });
                }}
              />
              <HomeButton4x1
                CategoryId={'recTQQfv194uE5O1K'}
                Category={'운동헬스'}
                imageUrl={require('../assets/images/emojis/gym.png')}
                onSelect={() => {
                  props.navigation.navigate({
                    name: 'SecondSelect',
                    params: {
                      categoryName: '운동・헬스',
                      categoryId: 'recTQQfv194uE5O1K',
                    },
                  });
                }}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <HomeButton4x1
                CategoryId={'recse3cQXji2BWlNu'}
                Category={'미용뷰티'}
                imageUrl={require('../assets/images/emojis/beauty.png')}
                onSelect={() => {
                  props.navigation.navigate({
                    name: 'SecondSelect',
                    params: {
                      categoryName: '미용・뷰티',
                      categoryId: 'recse3cQXji2BWlNu',
                    },
                  });
                }}
              />
              <HomeButton4x1
                CategoryId={'recqOzD4oznYyHeXS'}
                Category={'사진'}
                imageUrl={require('../assets/images/emojis/studio.png')}
                onSelect={() => {
                  props.navigation.navigate({
                    name: 'SecondSelect',
                    params: {
                      categoryName: '사진',
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
                    name: 'SecondSelect',
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
                    name: 'SecondSelect',
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
                    name: 'SecondSelect',
                    params: {
                      categoryName: '키즈',
                      categoryId: 'recXj7vVqBBJttGd8',
                    },
                  });
                }}
              />
              <HomeButton4x1
                CategoryId={'recz1ftDhPT8VADjf'}
                Category={'교육학원'}
                imageUrl={require('../assets/images/emojis/education.png')}
                onSelect={() => {
                  props.navigation.navigate({
                    name: 'SecondSelect',
                    params: {
                      categoryName: '교육・학원',
                      categoryId: 'recz1ftDhPT8VADjf',
                    },
                  });
                }}
              />
            </View>
          </View>
        </View>
        <Separator />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  homeScreen_Categories: {
    paddingHorizontal: 10,
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
});
