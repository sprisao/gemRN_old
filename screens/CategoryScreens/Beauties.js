import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useGlobalContext } from '../../Context';

import GridWrapper from '../../components/CategoryScreen/GridWrapper';

const Tab = createMaterialTopTabNavigator();

export default function Beauties(props) {
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

  const hair = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'rectmhblFe6SXqbDG'
  );
  const nail = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'reccLo8LhIMBVi92x'
  );
  const waxing = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'rec9EMDNL5gv2M3VF'
  );
  const massage = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recIFB4JmiXOAiOxC'
  );
  const tanning = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recP2Ywh8j0Pr4PQL'
  );
  const eyebrow = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recwYEHRWLdoboEUc'
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
  function Hair() {
    return (
      <GridWrapper
        data={hair}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Nail() {
    return (
      <GridWrapper
        data={nail}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Waxing() {
    return (
      <GridWrapper
        data={waxing}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Massage() {
    return (
      <GridWrapper
        data={massage}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Tanning() {
    return (
      <GridWrapper
        data={tanning}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Eyebrow() {
    return (
      <GridWrapper
        data={eyebrow}
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
      <Tab.Screen name='미용실' component={Hair} />
      <Tab.Screen name='네일샵' component={Nail} />
      <Tab.Screen name='왁싱샵' component={Waxing} />
      <Tab.Screen name='마사지샵' component={Massage} />
      <Tab.Screen name='태닝샵' component={Tanning} />
      <Tab.Screen name='눈썹관리' component={Eyebrow} />
    </Tab.Navigator>
  );
}