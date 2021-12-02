import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useGlobalContext } from '../Context';

const CategoryScreen = (props) => {
  const selectedCat = props.route.params.categoryName;
  const secondCatName = props.route.params.secondCatName;

  const { secondCategories } = useGlobalContext();

  console.log(secondCategories);

  return (
    <View style={styles.screen}>
      <Text>{selectedCat}</Text>
      <Text>{secondCatName}</Text>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
