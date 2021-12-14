import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useGlobalContext } from '../../Context';
import GridWrapper from '../../components/CategoryScreen/GridWrapper';

const Tab = createMaterialTopTabNavigator();

export default function Cafes(props) {
  const { cafes } = useGlobalContext();
  const currentLocation = props.route.params.location;

  let localFilter;
  if (currentLocation === '전체') {
    localFilter = cafes;
  } else {
    localFilter = cafes.filter(
      (item) => item.eupmyeondongRi === currentLocation
    );
  }
  const moveToPage = props.route.params.secondCatName;

  const all = localFilter;

  const view = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'rec8oWnvuNNY8pcrd'
  );
  const brunch = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recGU2LGE21U74UVF'
  );
  const dessert = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recUwXSvhzRW2ePyL'
  );
  const atmosphere = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recZuQtNZBNx198JS'
  );
  const work = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recavKfhMI5a7UCmE'
  );
  const nature = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recrlq7SKKROlBl0x'
  );
  const bakery = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recyouPHU8sgXOrhJ'
  );
  const insta = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'reczJ8Oy2h24xx2Ji'
  );

  function All() {
    return (
      <GridWrapper
        data={all}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function View() {
    return (
      <GridWrapper
        data={view}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function Brunch() {
    return (
      <GridWrapper
        data={brunch}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function Dessert() {
    return (
      <GridWrapper
        data={dessert}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function Atmosphere() {
    return (
      <GridWrapper
        data={atmosphere}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Work() {
    return (
      <GridWrapper
        data={work}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Nature() {
    return (
      <GridWrapper
        data={nature}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Bakery() {
    return (
      <GridWrapper
        data={bakery}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Insta() {
    return (
      <GridWrapper
        data={insta}
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
          // backgroundColor: 'blue',
          alignItems: 'center',
          padding: 0,
          margin: 0,
        },
        tabBarItemStyle: {
          width: 'auto',
          height: 25,
          padding: 0,
          margin: 1,
          // backgroundColor: 'green',
          alignItems: 'center',
        },
        tabBarLabelStyle: {
          margin: 0,
          paddingHorizontal: 10,
          // borderWidth: 1,
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
      <Tab.Screen name='뷰 맛집' component={View} />
      <Tab.Screen name='브런치' component={Brunch} />
      <Tab.Screen name='디저트 맛집' component={Dessert} />
      <Tab.Screen name='분위기' component={Atmosphere} />
      <Tab.Screen name='작업하기 좋은' component={Work} />
      <Tab.Screen name='자연' component={Nature} />
      <Tab.Screen name='베이커리' component={Bakery} />
      <Tab.Screen name='인스타감성' component={Insta} />
    </Tab.Navigator>
  );
}
