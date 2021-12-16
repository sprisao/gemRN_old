import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useGlobalContext } from '../../Context';

import GridWrapper from '../../components/CategoryScreen/GridWrapper';

const Tab = createMaterialTopTabNavigator();

export default function Pets(props) {
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

  const petSalon = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recNHUymuq99INWsu'
  );
  const petHospital = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recNDtab853upkvVi'
  );
  const petCafe = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'rec0PBKigkLj2hsXu'
  );
  const petFood = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recvwEUBuY9JKM1Ir'
  );
  const petHotel = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recRgYDuWlzmRi0kP'
  );
  const petAcademy = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recMQRcke0FoT18ga'
  );
  const petService = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recRS7KtSyKJqpH2b'
  );
  const petMissing = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recfcFmEOW7eQkkpw'
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
  function PetSalon() {
    return (
      <GridWrapper
        data={petSalon}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function PetHospital() {
    return (
      <GridWrapper
        data={petHospital}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function PetCafe() {
    return (
      <GridWrapper
        data={petCafe}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function PetFood() {
    return (
      <GridWrapper
        data={petFood}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function PetHotel() {
    return (
      <GridWrapper
        data={petHotel}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function PetAcademy() {
    return (
      <GridWrapper
        data={petAcademy}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function PetService() {
    return (
      <GridWrapper
        data={petService}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function PetMissing() {
    return (
      <GridWrapper
        data={petMissing}
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
      <Tab.Screen name='미용' component={PetSalon} />
      <Tab.Screen name='동물병원' component={PetHospital} />
      <Tab.Screen name='애견카페' component={PetCafe} />
      <Tab.Screen name='사료, 간식' component={PetFood} />
      <Tab.Screen name='호텔' component={PetHotel} />
      <Tab.Screen name='훈련' component={PetAcademy} />
      <Tab.Screen name='서비스' component={PetService} />
      <Tab.Screen name='유기동물보호' component={PetMissing} />
    </Tab.Navigator>
  );
}
