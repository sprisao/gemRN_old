import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Video } from 'expo-av';
import { useGlobalContext } from '../../Context';
import PagerView from 'react-native-pager-view';

const HomePromotion = () => {
  const { promotions, promoLoading } = useGlobalContext();
  const [isPreloading, setIsPreloading] = useState(true);

  if (promoLoading) return <Text>로딩중</Text>;

  _handleVideoRef = (component) => {
    const playbackObject = component;
  };

  return (
    <View style={styles.promotionSection}>
      <View style={styles.promotionWrapper}>
        <PagerView
          style={{ flex: 1, width: '100%', height: '100%' }}
          initialPage={0}
          showPageIndicator={true}
          onPageSelected={() => {}}
        >
          {promotions.map((item) => {
            return (
              <View key={item.id} style={styles.pageContainer}>
                {isPreloading && (
                  <ActivityIndicator
                    animating
                    color={'gray'}
                    size='large'
                    style={{
                      flex: 1,
                      position: 'absolute',
                      top: '50%',
                      left: '45%',
                    }}
                  />
                )}
                <Video
                  ref={this._handleVideoRef}
                  onReadyForDisplay={() => setIsPreloading(false)}
                  onLoadStart={() => setIsPreloading(true)}
                  style={styles.video}
                  source={{ uri: item.promotionMedia[0].url }}
                  resizeMode='cover'
                  rate={1}
                  shouldPlay={true}
                  isLooping={true}
                  // muted={true}
                />
                <View style={styles.promoCover}>
                  <TouchableOpacity
                    style={styles.promoArticle}
                    onPress={() => {}}
                  >
                    <Text style={styles.promoArticleDescText}>
                      {item.mainCopy}
                    </Text>
                    <Text style={styles.promoArticleNameText}>{item.name}</Text>

                    <Text style={styles.promoArticleMoreText}>더 알아보기</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </PagerView>
      </View>
    </View>
  );
};

export default HomePromotion;

const styles = StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoHeaderText: {
    fontFamily: 'notoSans-Bold',
    fontSize: 18,
    color: 'white',
    includeFontPadding: false,
  },

  promoArticle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  promoArticleNameText: {
    fontSize: 18,
    fontFamily: 'notoSans-Medium',
    color: 'white',
    includeFontPadding: false,
  },
  promoArticleDescText: {
    fontSize: 14,
    fontFamily: 'notoSans-Light',
    color: 'white',
    includeFontPadding: false,
    textAlign: 'center',
  },
  promoArticleMoreText: {
    fontSize: 13,
    fontFamily: 'notoSans-Light',
    color: 'white',
    includeFontPadding: false,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
