import React from 'react';
import { StyleSheet, Text, FlatList, View, Image } from 'react-native';
import GridTile from '../GridTile';
import { useGlobalContext } from '../../../Context';

const Res_Sec_All = (props) => {
  const { restaurants } = useGlobalContext();

  const dataSlice = restaurants.slice(1, 100);

  const renderStoreGrid = (data) => {
    return (
      <GridTile
        name={data.item.name}
        image={data.item.images[0].url}
        onSecondSelect={() => {
          props.navigation.navigate({
            name: 'DetailsScreen',
            params: {
              secondCatId: data.item.id,
              secondCatName: data.item.title,
              categoryName: data.item.firstCategory[0],
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={dataSlice}
        keyExtractor={(item, index) => item.id}
        renderItem={renderStoreGrid}
        style={{ flex: 1, width: '100%' }}
        numColumns={2}
      />
    </View>
  );
};

export default Res_Sec_All;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  image: {
    width: 40,
    height: 40,
  },
});
