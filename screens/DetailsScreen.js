import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';
import FastImage from 'react-native-fast-image';
import { Feather } from '@expo/vector-icons';
import BodyText from '../constants/styleSettings/BodyText';

const DetailsScreen = (props) => {
  store = props.route.params.storeDetails;
  console.log(store);

  // 휴무 필터링
  let breakDays;

  if (store.breakDays) {
    if (store.breakDays[0] === '연중무휴') {
      breakDays = (
        <View style={styles.detailsInfo_Item}>
          <Feather
            style={{ marginRight: 10 }}
            name='x-circle'
            size={16}
            color='#a8a8a8'
          />
          <Text style={styles.detailsInfo_ItemText}>{store.breakDays}</Text>
        </View>
      );
    }
    if (store.breakDays[0] !== '연중무휴' && store.breakDays.length === 1) {
      breakDays = (
        <View style={styles.detailsInfo_Item}>
          <Feather
            style={{ marginRight: 10 }}
            name='x-circle'
            size={16}
            color='#a8a8a8'
          />
          <Text style={styles.detailsInfo_ItemText}>
            {store.breakDays}{' '}
            <Text style={styles.detailsInfo_ItemText} style={{ color: 'red' }}>
              휴무
            </Text>
          </Text>
        </View>
      );
    }
    if (store.breakDays.length >= 2) {
      breakDays = (
        <View style={styles.detailsInfo_Item}>
          <Feather
            style={{ marginRight: 10 }}
            name='x-circle'
            size={16}
            color='#a8a8a8'
          />
          {store.breakDays.map((breakDay) => (
            <Text style={styles.detailsInfo_ItemText} key={breakDay.toString()}>
              {breakDay}&nbsp;
            </Text>
          ))}
          <Text
            style={styles.detailsInfo_ItemText}
            style={{ color: '#dfdfdf' }}
          >
            휴무
          </Text>
        </View>
      );
    }
  }

  return (
    <ScrollView
      style={styles.detailScreen}
      // contentContainerStyle={{ flexGrow: 1 }}
    >
      <PagerView
        style={styles.viewPager}
        initialPage={0}
        showPageIndicator={true}
      >
        {store.images.map((item) => {
          return (
            <View style={styles.page} key={item.id}>
              <FastImage
                source={{ uri: item.url }}
                style={{ width: '100%', height: '100%' }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </View>
          );
        })}
      </PagerView>
      <View style={styles.detailHeaderContainer}>
        <View style={styles.detailHeaderWrapper}>
          <Text style={styles.detailsHeader_Desc}>
            {store.shortDescription}
          </Text>
          <Text style={styles.detailsHeader_Name}>{store.name}</Text>
          <Text style={styles.detailsHeader_miniAddress}>
            {store.miniAddress}
          </Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsInfo}>
          <Text style={styles.detailsInfoHeader}>상세정보</Text>
          <View style={styles.detailsInfo_Item}>
            <Feather
              style={{ marginRight: 10 }}
              name='clock'
              size={16}
              color='#a8a8a8'
            />
            <Text style={styles.detailsInfo_ItemText}>
              {store.openHour} ~ {store.closeHour}
            </Text>
          </View>
          {breakDays}
          <View style={styles.detailsInfo_Item}>
            <Feather
              style={{ marginRight: 10 }}
              name='map-pin'
              size={16}
              color='#a8a8a8'
            />
            <Text style={styles.detailsInfo_ItemText} numberOfLines={1}>
              {store.fullAddress}
            </Text>
          </View>
          <View style={styles.detailsInfo_Item}>
            <Feather
              style={{ marginRight: 10 }}
              name='phone-outgoing'
              size={16}
              color='#a8a8a8'
            />
            <Text style={styles.detailsInfo_ItemText}>{store.phoneNumber}</Text>
          </View>
          <View style={styles.detailsInfo_Item}>
            <Feather
              style={{ marginRight: 10 }}
              name='instagram'
              size={16}
              color='#a8a8a8'
            />
            <Text style={styles.detailsInfo_ItemText} numberOfLines={1}>
              @{store.instagramAccount}
            </Text>
          </View>
          <View style={styles.detailsInfo_Item}>
            <Feather
              style={{ marginRight: 10 }}
              name='link-2'
              size={16}
              color='#a8a8a8'
            />
            <Text style={styles.detailsInfo_ItemText} numberOfLines={1}>
              {store.naverLink}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  detailScreen: {
    flex: 1,
  },
  viewPager: {
    flex: 1,
    width: '100%',
    height: 470,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailHeaderContainer: {
    width: '100%',
    padding: 12,
    position: 'absolute',
    top: 320,
  },
  detailHeaderWrapper: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 10,
    borderRadius: 10,
  },
  detailsHeader_Desc: {
    fontFamily: 'notoSans-Light',
    color: 'white',
  },
  detailsHeader_Name: {
    fontSize: 22,
    fontFamily: 'notoSans-Medium',
    color: 'white',
  },

  detailsHeader_miniAddress: { fontFamily: 'notoSans-Regular', color: 'white' },
  detailsContainer: {
    paddingHorizontal: 10,
    // backgroundColor: 'yellow',
  },
  detailsInfoHeader: {
    fontFamily: 'notoSans-Bold',
    fontSize: 18,
    marginVertical: 7,
    letterSpacing: -1,
  },
  detailsInfo_Item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dddddd',
    // marginBottom: 5,
    paddingVertical: 6,
  },
  detailsInfo_ItemText: {
    fontFamily: 'notoSans-Light',
    includeFontPadding: false,
    paddingBottom: 2,
  },
});
