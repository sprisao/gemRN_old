import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useGlobalContext } from '../../Context';

import GridWrapper from '../../components/CategoryScreen/GridWrapper';

const Tab = createMaterialTopTabNavigator();

export default function Photos(props) {
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

  const studio = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recqa1nIU4oQNloOS'
  );
  const wedding = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recDvcF8MOdX7X3Zs'
  );
  const self = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recINBMqK1tHCGa77'
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
  function Studio() {
    return (
      <GridWrapper
        data={studio}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Wedding() {
    return (
      <GridWrapper
        data={wedding}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Self() {
    return (
      <GridWrapper
        data={self}
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
          // justifyContent: 'space-between',
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
      <Tab.Screen name='스튜디오' component={Studio} />
      <Tab.Screen name='웨딩' component={Wedding} />
      <Tab.Screen name='셀프' component={Self} />
    </Tab.Navigator>
  );
}
