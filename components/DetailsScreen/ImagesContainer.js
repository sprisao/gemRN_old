import React from 'react';
import PagerView from 'react-native-pager-view';
import FastImage from 'react-native-fast-image';
import { StyleSheet, View } from 'react-native';

const ImagesContainer = ({ Images }) => {
  return (
    <View style={{ width: '100%', height: 450 }}>
      <PagerView
        style={{ flex: 1, width: '100%', height: '100%' }}
        initialPage={0}
        showPageIndicator={true}
      >
        {Images.map((item) => {
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
    </View>
  );
};

export default ImagesContainer;

const styles = StyleSheet.create({});
