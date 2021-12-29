import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const HomeHeader = (props) => {
  return (
    <View style={styles.homeHeader}>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.leftBox} onPress={props.onTab}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/BI/logo.png')}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <Text style={styles.headerText}>어디가지? 고민할 땐-!</Text>
        </TouchableOpacity>
        <View style={styles.rightBox}>
          <TouchableOpacity style={styles.locationPicker_Container}>
            <View style={styles.locationWrapper}>
              <Feather name='map-pin' size={13} color='black' />
              <Text style={styles.locationText}>강원도 원주시</Text>
              <Feather name='chevron-down' size={15} color='black' />
            </View>
          </TouchableOpacity>
          <View style={styles.travelMode_Container}>
            <View style={styles.travelWrapper}>
              <Text style={styles.travelText}>여행모드</Text>
              <Switch
                style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  homeHeader: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 2,
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftBox: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  logoContainer: { width: 30, height: 33 },
  rightBox: {
    width: '50%',
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationPicker_Container: {
    height: 47,
    width: '64%',
    paddingHorizontal: 7,
    paddingVertical: 5,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  locationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  travelMode_Container: {
    width: '31%',
    height: 47,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },

  headerText: {
    fontFamily: 'SD-UL',
    fontSize: 12,
    marginLeft: 10,
  },
  locationText: { fontFamily: 'SD-UL', fontSize: 12, marginBottom: 3 },
  travelText: {
    fontFamily: 'SD-UL',
    fontSize: 11,
    textAlign: 'center',
  },
});
