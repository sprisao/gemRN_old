import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useGlobalContext } from '../../Context';

import GridWrapper from '../../components/CategoryScreen/GridWrapper';

const Tab = createMaterialTopTabNavigator();

export default function Kids(props) {
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

  const kidsPlay = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recJ7gITlmZadDFsf'
  );
  const kidsCafes = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recp9ubjghJcZ8686'
  );
  const kidsHospitals = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recjWmvoxzm3RObhz'
  );
  const kidsSports = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recVBbL0KUooQ6IBC'
  );
  const kidsStudios = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recVBbL0KUooQ6IBC'
  );
  const kidsClothes = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'receTDDCYZBdZEdKk'
  );
  const kidsEducation = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recnmCY9PvJj8lhEB'
  );
  const kidsShops = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recatWzT1hyQHGWwk'
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
  function KidsPlay() {
    return (
      <GridWrapper
        data={kidsPlay}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function KidsCafes() {
    return (
      <GridWrapper
        data={kidsCafes}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function KidsHospitals() {
    return (
      <GridWrapper
        data={kidsHospitals}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function KidsSports() {
    return (
      <GridWrapper
        data={kidsSports}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function KidsStudios() {
    return (
      <GridWrapper
        data={kidsStudios}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function KidsClothes() {
    return (
      <GridWrapper
        data={kidsClothes}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function KidsEducation() {
    return (
      <GridWrapper
        data={kidsEducation}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function KidsShops() {
    return (
      <GridWrapper
        data={kidsShops}
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
      <Tab.Screen name='놀이터' component={KidsPlay} />
      <Tab.Screen name='키즈카페' component={KidsCafes} />
      <Tab.Screen name='키즈병원' component={KidsHospitals} />
      <Tab.Screen name='키즈스포츠' component={KidsSports} />
      <Tab.Screen name='키즈스튜디오' component={KidsSports} />
      <Tab.Screen name='키즈옷' component={KidsClothes} />
      <Tab.Screen name='키즈교육' component={KidsEducation} />
      <Tab.Screen name='키즈용품' component={KidsShops} />
    </Tab.Navigator>
  );
}
