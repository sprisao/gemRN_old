import React, { useState, useContext, useEffect } from 'react';

import SecondSelectButton from '../components/SecondSelectScreen/SecondSelectButton';

import { StyleSheet, Text, View, FlatList } from 'react-native';

import { useGlobalContext } from '../Context';

const SecondSelectScreen = (props) => {
  const {
    navigationLoading,
    secondLoading,
    firstCategories,
    secondCategories,
    locationCategories,
  } = useGlobalContext();

  const catId = props.navigation.getParam('categoryId');

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
            routeName: 'Category',
            params: {
              secondCatId: data.item.id,
              selectedCatName: data.item.title,
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

SecondSelectScreen.navigationOptions = (navigationData) => {
  const catTitle = navigationData.navigation.getParam('categoryName');

  return {
    headerTitle: catTitle,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});
