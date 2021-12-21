import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import GridWrapper from '../../components/CategoryScreen/GridWrapper';
import { useGlobalContext } from '../../Context';

const deviceWidth = Dimensions.get('window').width;

const CategoryTest = (props) => {
  const currentLocation = props.route.params.location;
  const { restaurants, secondCategories } = useGlobalContext();

  const pageRef = useRef();
  const tabsRef = useRef();
  const indexRef = useRef();

  let localFilter;
  if (currentLocation === '전체') {
    localFilter = restaurants;
  } else {
    localFilter = restaurants.filter(
      (item) => item.eupmyeondongRi === currentLocation
    );
  }

  const groupBy = function (data, key) {
    return data.reduce(function (storage, item) {
      const group = item[key];
      storage[group] = storage[group] || [];
      storage[group].push(item);
      return storage;
    }, {});
  };

  const orderData = (data, key) => {
    const container = [{ category: '전체', data: localFilter }];
    const preData = groupBy(data, key);
    const getData = Object.entries(preData);

    getData.forEach((element) => {
      container.push({
        category: element[0],
        data: element[1],
      });
    });
    return container;
  };

  const dataSet = orderData(localFilter, 'secondCategory');

  const tabToPage = (e) => {
    pageRef.current.scrollToIndex({
      animated: true,
      index: e,
      viewPosition: 0,
    });
  };

  const pageToTab = (e) => {
    const offset = e.nativeEvent.contentOffset.x;
    const pageIndex = offset / deviceWidth;
    if (offset > 0) {
      tabsRef.current.scrollToIndex({
        animated: true,
        index: pageIndex,
        viewPosition: 0.5,
      });
    }
  };

  const renderTabs = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={() => tabToPage(index)}>
        <Text>{item.category}</Text>
      </TouchableOpacity>
    );
  };

  const renderPage = ({ item, index }) => {
    return (
      <View style={styles.page}>
        <GridWrapper
          data={item.data}
          navigation={props.navigation}
          route={props.route}
        ></GridWrapper>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <FlatList
          ref={tabsRef}
          data={dataSet}
          keyExtractor={(item) => item.id}
          renderItem={renderTabs}
          horizontal
          showsHorizontalScrollIndicator={false}
          getItemLayout={(data, index) => ({
            length: 110,
            offset: 110 * index,
            index,
          })}
        />
      </View>
      <FlatList
        ref={pageRef}
        data={dataSet}
        keyExtractor={(item) => item.id}
        renderItem={renderPage}
        onScroll={pageToTab}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        getItemLayout={(data, index) => ({
          length: deviceWidth,
          offset: deviceWidth * index,
          index,
        })}
      />
    </View>
  );
};

export default CategoryTest;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  page: { width: deviceWidth },
  buttonContainer: { height: 'auto' },
  button: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'yellow',
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
});
