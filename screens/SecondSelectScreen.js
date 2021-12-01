import React, { useState, useContext, useEffect } from 'react';

import SecondSelectButton from '../components/SecondSelectScreen/SecondSelectButton';

import Airtable from 'airtable';
import { REACT_APP_AIRTABLE_API_KEY } from '@env';

import { StyleSheet, Text, View, FlatList } from 'react-native';

const storeBase = new Airtable({ apiKey: REACT_APP_AIRTABLE_API_KEY }).base(
  'app0tAUATUh8jBxX4'
);

const SecondSelectScreen = (props) => {
  const [secondCategories, setSecondCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const secondCategory = [];

  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = secondCategories.filter(
    (cat) => cat.firstCategoryId[0] === catId
  );

  useEffect(() => {
    storeBase('secondCategoryData')
      .select({
        view: 'data',
        pageSize: 50,
        fields: ['title', 'firstCategoryId', 'id', 'emoji', 'firstCategory'],
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            secondCategory.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          setSecondCategories(secondCategory);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('세컨드 카테고리 데이터 불러오기 성공');
            setLoading(false);
          }
        }
      );
  }, []);

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

  if (loading) {
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
