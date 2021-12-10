import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const DetailsInfo = (props) => {
  let breakDays;

  if (storeData.breakDays) {
    if (storeData.breakDays[0] === '연중무휴') {
      breakDays = (
        <View style={styles.detailsInfo_Item}>
          <Feather
            style={{ marginRight: 10 }}
            name='x-circle'
            size={16}
            color='#a8a8a8'
          />
          <Text style={styles.detailsInfo_ItemText}>{storeData.breakDays}</Text>
        </View>
      );
    }
    if (
      storeData.breakDays[0] !== '연중무휴' &&
      storeData.breakDays.length === 1
    ) {
      breakDays = (
        <View style={styles.detailsInfo_Item}>
          <Feather
            style={{ marginRight: 10 }}
            name='x-circle'
            size={16}
            color='#a8a8a8'
          />
          <Text style={styles.detailsInfo_ItemText}>
            {storeData.breakDays}{' '}
            <Text style={styles.detailsInfo_ItemText} style={{ color: 'red' }}>
              휴무
            </Text>
          </Text>
        </View>
      );
    }
    if (storeData.breakDays.length >= 2) {
      breakDays = (
        <View style={styles.detailsInfo_Item}>
          <Feather
            style={{ marginRight: 10 }}
            name='x-circle'
            size={16}
            color='#a8a8a8'
          />
          {storeData.breakDays.map((breakDay) => (
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
    <View style={styles.detailsInfo}>
      <View style={styles.detailsInfoWrapper}>
        <Text style={styles.detailsInfoHeader}>상세정보</Text>
        <View style={styles.detailsInfo_Item}>
          <Feather
            style={{ marginRight: 10 }}
            name='clock'
            size={16}
            color='#a8a8a8'
          />
          <Text style={styles.detailsInfo_ItemText}>
            {storeData.openHour} ~ {storeData.closeHour}
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
            {storeData.fullAddress}
          </Text>
        </View>
        <View style={styles.detailsInfo_Item}>
          <Feather
            style={{ marginRight: 10 }}
            name='phone-outgoing'
            size={16}
            color='#a8a8a8'
          />
          <Text style={styles.detailsInfo_ItemText}>
            {storeData.phoneNumber}
          </Text>
          <TouchableOpacity
            style={styles.infoButton}
            onPress={() => {
              Linking.openURL(`tel:${storeData.phoneNumber}`);
            }}
          >
            <Feather name='external-link' size={15} color='black' />
            <Text style={styles.buttonTitle}>전화걸기</Text>
          </TouchableOpacity>
        </View>
        {storeData.instagramAccount ? (
          <View style={styles.detailsInfo_Item}>
            <Feather
              style={{ marginRight: 10 }}
              name='instagram'
              size={16}
              color='#a8a8a8'
            />
            <Text style={styles.detailsInfo_ItemText} numberOfLines={1}>
              @{storeData.instagramAccount}
            </Text>
            <TouchableOpacity
              style={styles.infoButton}
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
              <Feather name='external-link' size={15} color='black' />
              <Text style={styles.buttonTitle}>보기</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <View style={styles.detailsInfo_Item}>
          <Feather
            style={{ marginRight: 10 }}
            name='link-2'
            size={16}
            color='#a8a8a8'
          />
          <View style={styles.naverLinkContainer}>
            <Text style={styles.detailsInfo_ItemText} numberOfLines={1}>
              {storeData.naverLink}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.infoButton}
            onPress={() => {
              Linking.openURL(storeData.naverLink).catch(() => {
                storeData.naverLink;
              });
            }}
          >
            <Feather name='external-link' size={15} color='black' />
            <Text style={styles.buttonTitle}>보기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailsInfo;

const styles = StyleSheet.create({
  detailsInfo: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  detailsInfoHeader: {
    fontFamily: 'notoSans-Bold',
    fontSize: 22,
    marginVertical: 7,
    marginLeft: 5,
    letterSpacing: -1,
  },
  detailsInfo_Item: {
    flexDirection: 'row',
    width: '100%',
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
  infoButton: {
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    marginLeft: 3,
  },
  naverLinkContainer: {
    width: '75%',
  },
});
