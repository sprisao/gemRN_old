import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useGlobalContext } from '../../Context';

import GridWrapper from '../../components/CategoryScreen/GridWrapper';

const Tab = createMaterialTopTabNavigator();

export default function Bars(props) {
  const { others } = useGlobalContext();
  // 1차 카테고리 값 불러오기
  const currentCategory = props.route.params.categoryName;
  // 선택된 2차 카테고리
  const moveToPage = props.route.params.secondCatName;
  // 1차카테고리 값에 따라 'Others' 데이터 분리
  const categoryFilter = others.filter(
    (item) => item.firstCategory[0] === currentCategory
  );

  // 지역 필터링
  const currentLocation = props.route.params.location;
  let localFilter;
  if (currentLocation === '전체') {
    localFilter = categoryFilter;
  } else {
    localFilter = categoryFilter.filter(
      (item) => item.eupmyeondongRi === currentLocation
    );
  }

  // 받아온 카테고리의 데이터를 2차 카테고리 별로 정리
  const all = localFilter;

  const izakaya = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recZp64xBbY63vQh6'
  );
  const wine = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recLsMyQf1neC0GeU'
  );
  const soju = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recTRPTfVqwxGacE7'
  );
  const makgoli = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recgpGbnVZmvyFT0y'
  );
  const hof = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'rec3JIMpOwAf9Jfz2'
  );

  // 네비게이션 생성을 위한 function 정의
  function All() {
    return (
      <GridWrapper
        data={all}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Izakaya() {
    return (
      <GridWrapper
        data={izakaya}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Wine() {
    return (
      <GridWrapper
        data={wine}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Soju() {
    return (
      <GridWrapper
        data={soju}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Makgoli() {
    return (
      <GridWrapper
        data={makgoli}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Hof() {
    return (
      <GridWrapper
        data={hof}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  return (
    <Tab.Navigator
      initialRouteName={moveToPage}
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarStyle: {
          height: 50,
          alignItems: 'center',
          padding: 0,
          margin: 0,
        },
        tabBarItemStyle: {
          width: 'auto',
          height: 25,
          padding: 0,
          margin: 1,
          alignItems: 'center',
        },
        tabBarLabelStyle: {
          margin: 0,
          paddingHorizontal: 10,
          fontFamily: 'SD-R',
          fontSize: 13,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: 'black',
          borderBottomWidth: 3,
          borderRadius: 20,
        },
      }}
    >
      <Tab.Screen name='전체' component={All} />
      <Tab.Screen name='이자카야' component={Izakaya} />
      <Tab.Screen name='소주·포차' component={Soju} />
      <Tab.Screen name='전통주·막걸리' component={Makgoli} />
      <Tab.Screen name='와인·바' component={Wine} />
      <Tab.Screen name='맥주·호프' component={Hof} />
    </Tab.Navigator>
  );
}
