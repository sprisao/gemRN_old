import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

import { useGlobalContext } from '../../Context';

const DEVICE_WIDTH = Dimensions.get('window').width;

const Banner = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { adsLoading, ads } = useGlobalContext();

  scrollRef = useRef();

  useEffect(() => {
    const counter = setTimeout(() => {
      setSelectedIndex((prev) => (prev === ads.length - 1 ? 0 : prev + 1));
    }, 2000);
    scrollRef.current.scrollTo({
      animated: true,
      y: 0,
      x: (DEVICE_WIDTH - 20) * selectedIndex,
    });
    return () => clearTimeout(counter);
  }, [selectedIndex]);

  console.log(selectedIndex);
  const scrollEnded = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;

    // get current position of the scrollView
    const contentOffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(selectedIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        style={{ width: '100%', height: '100%', backgroundColor: 'yellow' }}
        onMomentumScrollEnd={scrollEnded}
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
      >
        {ads.map((item, index) => (
          <Image
            style={styles.bannerImage}
            key={item.id}
            source={{
              uri: item.image[0].url,
            }}
          />
        ))}
      </ScrollView>
      <View style={styles.circleDiv}>
        {ads.map((item, i) => (
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
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    marginTop: 10,
    borderRadius: 3,
    overflow: 'hidden',
  },
  bannerImage: {
    width: DEVICE_WIDTH - 20,
    height: '100%',
  },
  circleDiv: {
    width: '100%',
    position: 'absolute',
    bottom: 5,
    height: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: 'white',
  },
});
