import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { NavigationContainer } from 'react-navigation';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { useGlobalContext } from '../Context';

const CategoryScreen = (props) => {
  const selectedCat = props.route.params.categoryName;
  const selectedSecond = props.route.params.selectedCatName;

  const { secondCategories } = useGlobalContext();

  console.log(secondCategories);

  return (
    <View style={styles.screen}>
      <Text>{selectedCat}</Text>
      <Text>{selectedSecond}</Text>
    </View>
  );
};

export default CategoryScreen;

CategoryScreen.navigationOptions = (navigationData) => {
  const catTitle = navigationData.route.params.categoryName;

  return {
    headerTitle: catTitle,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
