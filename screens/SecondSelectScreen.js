import React from 'react';

import SecondSelectButton from '../components/SecondSelectScreen/SecondSelectButton';

import { StyleSheet, Text, View, FlatList } from 'react-native';

import { useGlobalContext } from '../Context';

const SecondSelectScreen = (props) => {
  const { secondLoading, secondCategories } = useGlobalContext();

  const catId = props.route.params.categoryId;

  const selectedCategory = secondCategories.filter(
    (cat) => cat.firstCategoryId[0] === catId
  );

  const renderSecondSelect = (data) => {
    return (
      <SecondSelectButton
        title={data.item.title}
        emoji={data.item.emoji}
        onSecondSelect={() => {
          props.navigation.navigate({
            name: 'Restaurants',
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

  if (secondLoading) {
    return <Text>로딩중입니다</Text>;
  }
  return (
    <View style={styles.screen}>
      <SecondSelectButton
        title='전체'
        emoji='🅰️'
        style={{
          width: '97%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        touchableValue='100%'
        onSecondSelect={() => {
          props.navigation.navigate({
            name: 'Restaurants',
            params: {
              secondCatName: '전체',
              categoryName: '맛집',
            },
          });
        }}
      />
      <FlatList
        data={selectedCategory}
        keyExtractor={(item, index) => item.id}
        renderItem={renderSecondSelect}
        style={{ width: '100%' }}
        numColumns={2}
      />
    </View>
  );
};

export default SecondSelectScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 12,
  },
});
