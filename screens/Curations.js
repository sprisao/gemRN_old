import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Video } from 'expo-av';
import { useGlobalContext } from '../Context';

const Curations = (props) => {
  const { cafes } = useGlobalContext();

  const promotions = cafes.filter((item) => item.isPromotion === true);
  const [isPreloading, setIsPreloading] = useState(true);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}></View>
      {promotions.map((item) => {
        return (
          <TouchableOpacity
            style={styles.curationContainer}
            key={item.id}
            onPress={() => {
              props.navigation.navigate({
                name: 'Details',
                params: {
                  storeName: item.name,
                  storeDetails: item,
                  Category: item.secondCategory[0],
                },
              });
            }}
          >
            <View style={styles.videoContainer}>
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
            </View>
            <View style={styles.articleContainer}>
              <Text style={styles.copy}>{item.mainCopy}</Text>
              <Text style={styles.storeName}>{item.name}</Text>
              <Text style={styles.address}>{item.miniAddress}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
export default Curations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  curationContainer: {
    width: '100%',
    height: 'auto',
    marginBottom: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  videoContainer: {
    width: '100%',
    height: 170,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  articleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 'auto',
    paddingVertical: 8,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  copy: {
    fontFamily: 'SD-L',
    fontSize: 13,
    letterSpacing: -0.5,
    color: 'white',
  },
  storeName: {
    fontFamily: 'SD-B',
    fontSize: 22,
    letterSpacing: -0.5,
    color: 'white',
  },
  address: {
    fontFamily: 'SD-L',
    fontSize: 13,
    letterSpacing: -0.5,
    color: 'white',
  },
});
