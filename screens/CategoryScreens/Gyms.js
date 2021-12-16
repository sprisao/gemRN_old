import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useGlobalContext } from '../../Context';

import GridWrapper from '../../components/CategoryScreen/GridWrapper';

const Tab = createMaterialTopTabNavigator();

export default function Gyms(props) {
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

  const pilates = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recncrHZjtdMR8jna'
  );
  const health = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recbLcK45XFUXZeFd'
  );
  const yoga = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recQlL6tZdOLJHynf'
  );
  const crossfit = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recv2KMH47YlF6aY5'
  );
  const pt = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recuW23G75PROYP4u'
  );
  const golf = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recalJaZ4b7IOT4Pr'
  );
  const climb = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'rec97uIU22SxwuqXj'
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
  function Pilates() {
    return (
      <GridWrapper
        data={pilates}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Health() {
    return (
      <GridWrapper
        data={health}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Yoga() {
    return (
      <GridWrapper
        data={yoga}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Crossfit() {
    return (
      <GridWrapper
        data={crossfit}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Pt() {
    return (
      <GridWrapper
        data={pt}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Golf() {
    return (
      <GridWrapper
        data={golf}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Climb() {
    return (
      <GridWrapper
        data={climb}
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
      <Tab.Screen name='필라테스' component={Pilates} />
      <Tab.Screen name='헬스장' component={Health} />
      <Tab.Screen name='요가' component={Yoga} />
      <Tab.Screen name='크로스핏' component={Crossfit} />
      <Tab.Screen name='피티샵' component={Pt} />
      <Tab.Screen name='골프' component={Golf} />
      <Tab.Screen name='클라이밍' component={Climb} />
    </Tab.Navigator>
  );
}
