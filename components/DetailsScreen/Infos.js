import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Infos = (props) => {
  const storeData = props.route.params;

  console.log('받아졌니?', storeData.name);

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
    <View style={styles.detailsContainer}>
      <ScrollView>
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
          </View>
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
          </View>
          <View style={styles.detailsInfo_Item}>
            <Feather
              style={{ marginRight: 10 }}
              name='link-2'
              size={16}
              color='#a8a8a8'
            />
            <Text style={styles.detailsInfo_ItemText} numberOfLines={1}>
              {storeData.naverLink}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Infos;

const styles = StyleSheet.create({
  detailsContainer: {
    paddingHorizontal: 10,
    backgroundColor: 'yellow',
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
