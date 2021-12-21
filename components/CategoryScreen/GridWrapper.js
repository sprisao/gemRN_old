import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GridTile from './GridTile';

const GridWrapper = (props) => {
  let spotFilter;
  if (props.isSpot) {
    spotFilter = 'SpotDetails';
  } else spotFilter = 'Details';
  const renderStoreGrid = (data) => {
    return (
      <GridTile
        name={data.item.name}
        location={data.item.miniAddress}
        rating={data.item.preRating}
        desc={data.item.shortDescription}
        image={data.item.images[0].url}
        openHour={data.item.openHour}
        closeHour={data.item.closeHour}
        onSecondSelect={() => {
          props.navigation.navigate({
            name: 'Details',
            params: {
              storeName: data.item.name,
              storeDetails: data.item,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => item.id}
        renderItem={renderStoreGrid}
        style={{ flex: 1 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        windowSize={2}
      />
    </View>
  );
};

export default GridWrapper;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 8,
    marginTop: 15,
  },
});
