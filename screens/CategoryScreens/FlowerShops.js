import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useGlobalContext } from '../../Context';

import GridWrapper from '../../components/CategoryScreen/GridWrapper';

const Tab = createMaterialTopTabNavigator();

export default function FlowerShops(props) {
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

  const flowerShops = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recM7YVsd1UHtzSWp'
  );
  const flowerlessons = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recc9SoDTKtG0wMjc'
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
  function FlowerShops() {
    return (
      <GridWrapper
        data={flowerShops}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function FlowerLessons() {
    return (
      <GridWrapper
        data={flowerlessons}
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
        tabBarIndicatorContainerStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarStyle: {
          height: 45,
        },
        tabBarItemStyle: {
          alignItems: 'center',
          width: 85,
          padding: 0,
          paddingTop: 10,
          margin: 0,
        },
        tabBarLabelStyle: {
          flex: 1,
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
      <Tab.Screen name='꽃집' component={FlowerShops} />
      <Tab.Screen name='플라워레슨' component={FlowerLessons} />
    </Tab.Navigator>
  );
}
