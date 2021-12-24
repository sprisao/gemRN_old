import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Linking,
} from 'react-native';

import ImagesContainer from '../components/DetailsScreen/ImagesContainer';
import DetailsCuration from '../components/DetailsScreen/DetailsCuration';
import DetailsMenu from '../components/DetailsScreen/DetailsMenu';
import { Foundation } from '@expo/vector-icons';

import DetailsInfo from '../components/DetailsScreen/DetailsInfo';

const DEVICE_WIDTH = Dimensions.get('window').width;

const DetailsScreen = (props) => {
  const [isDetails, setIsDetails] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  storeData = props.route.params.storeDetails;

  let preRank;
  if (storeData.preRating > 8) {
    preRank = <Text style={styles.medals}>🏅🏅🏅</Text>;
  } else if (storeData.preRating > 6) {
    preRank = <Text style={styles.medals}>🏅🏅</Text>;
  } else if (storeData.preRating > 3) {
    preRank = <Text style={styles.medals}>🏅</Text>;
  } else preRank = null;

  const items = ['상세정보'];
  if (storeData.isMenu) {
    items.unshift('메뉴');
  }
  if (storeData.isPromotion) {
    items.unshift('큐레이션');
  }

  const scrollRef = useRef();
  const imageBoxRef = useRef();
  const scrollHandler = () => {
    scrollRef.current.scrollToEnd({ animated: true });
  };
  const infosTabHandler = () => {
    {
      !isDetails ? setIsDetails(true) : setIsDetails(false);
    }
    setTimeout(() => {
      scrollHandler();
    }, 30);
  };

  useEffect(() => {
    const counter = setTimeout(() => {
      setSelectedIndex((prev) =>
        prev === storeData.images.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    imageBoxRef.current.scrollTo({
      animated: true,
      y: 0,
      x: (DEVICE_WIDTH - 30) * selectedIndex,
    });
    return () => clearTimeout(counter);
  }, [selectedIndex]);

  const scrollEnded = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;

    // get current position of the scrollView
    const contentOffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(selectedIndex);
  };

  return (
    <ScrollView
      ref={scrollRef}
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      onContentSizeChange={(width, height) => {}}
    >
      <View style={styles.headerContainer}>
        <View style={styles.detailHeader}>
          <View style={styles.HeaderLeft}>
            <Text style={styles.storeDesc}>{storeData.shortDescription}</Text>
            <Text style={styles.storeName}>{storeData.name}</Text>
          </View>
          <View style={styles.HeaderRight}>
            <View style={styles.rankContainer}>{preRank}</View>
            <View style={styles.addressContainer}>
              <Text style={styles.miniAddress}>{storeData.miniAddress}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.imagesContainer}>
        <ScrollView
          ref={imageBoxRef}
          horizontal
          onMomentumScrollEnd={scrollEnded}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={{
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
          }}
        >
          {storeData.images.map((item) => {
            return (
              <Image
                key={item.id}
                style={{
                  width: DEVICE_WIDTH - 30,
                  height: '100%',
                }}
                source={{ uri: item.url }}
                resizeMode='cover'
              />
            );
          })}
        </ScrollView>
        <View style={styles.circleDiv}>
          {storeData.images.map((item, i) => (
            <View
              key={item.id}
              style={[
                styles.whiteCircle,
                { opacity: i === selectedIndex ? 1 : 0.5 },
              ]}
            />
          ))}
        </View>
      </View>
      {storeData.isMenu ? <DetailsMenu /> : null}
      {storeData.isPromotion ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonImageContainer}>
              <Image
                source={require('../assets/images/emojis/curation.png')}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <Text style={styles.buttonText}>젬 큐레이션</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {storeData.instagramAccount ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL(
                `instagram://user?username=${storeData.instagramAccount}`
              ).catch(() => {
                Linking.openURL(
                  `https://www.instagram.com/${storeData.instagramAccount}`
                );
              });
            }}
          >
            <View style={styles.buttonImageContainer}>
              <Image
                source={require('../assets/images/SNS/INSTAGRAM.png')}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <Text style={styles.buttonText}>@{storeData.instagramAccount}</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL(storeData.naverLink).catch(() => {
              storeData.naverLink;
            });
          }}
        >
          <View style={styles.buttonImageContainer}>
            <Image
              source={require('../assets/images/SNS/NAVER.png')}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <Text style={styles.buttonText}>스마트플레이스</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={infosTabHandler}>
          <View style={styles.buttonImageContainer}>
            <Image
              source={require('../assets/images/emojis/details.png')}
              style={{ width: '75%', height: '100%' }}
            />
          </View>
          <Text style={styles.buttonText}>상세정보</Text>
        </TouchableOpacity>
      </View>
      {isDetails ? <DetailsInfo /> : null}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Foundation
            name='telephone'
            size={35}
            color='#51cf66'
            style={{ marginRight: 10 }}
          />
          <Text
            style={styles.buttonText}
            onPress={() => {
              Linking.openURL(`tel:${storeData.phoneNumber}`);
            }}
          >
            전화걸기
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  detailScreen: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  headerContainer: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  detailHeader: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  HeaderLeft: {
    width: '75%',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    justifyContent: 'space-between',
  },
  storeDesc: {
    fontFamily: 'notoSans-Regular',
    fontSize: 16,
    letterSpacing: -1,
  },

  storeName: {
    fontFamily: 'notoSans-Bold',
    fontSize: 32,
    letterSpacing: -1.5,
  },
  HeaderRight: {
    height: '100%',
    paddingVertical: 6,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  miniAddress: {
    fontFamily: 'notoSans-Regular',
    fontSize: 16,
  },
  medals: {
    fontSize: 22,
    letterSpacing: -6,
  },
  imagesContainer: {
    height: 400,
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: 'white',
    height: 65,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: { fontFamily: 'SD-SB', fontSize: 16, letterSpacing: -0.25 },
  buttonImageContainer: { width: 30, height: 30, marginRight: 5 },
  circleDiv: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
    height: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteCircle: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    margin: 3,
    backgroundColor: 'white',
  },
});
