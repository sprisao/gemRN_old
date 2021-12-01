import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoryScreen = (props) => {
  const selectedCat = props.navigation.getParam('categoryName');
  const selectedSecond = props.navigation.getParam('selectedCatName');

  return (
    <View style={styles.screen}>
      <Text>{selectedCat}</Text>
      <Text>{selectedSecond}</Text>
    </View>
  );
};

export default CategoryScreen;

CategoryScreen.navigationOptions = (navigationData) => {
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
  },
});
