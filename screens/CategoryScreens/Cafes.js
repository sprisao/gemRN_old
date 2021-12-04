import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useGlobalContext } from '../../Context';
import GridWrapper from '../../components/CategoryScreen/GridWrapper';
import TopTabNavigation from './TopTabNavigator';
import colors from '../../constants/styleSettings/colors';

const Tab = createMaterialTopTabNavigator();

export default function Cafes(props) {
  const { cafes } = useGlobalContext();
  const moveToPage = props.route.params.secondCatName;

  const all = cafes;

  const headerTitle = props.route.params.secondCatName;

  const view = cafes.filter(
    (item) => item.secondCategoryId[0] === 'rec8oWnvuNNY8pcrd'
  );
  const brunch = cafes.filter(
    (item) => item.secondCategoryId[0] === 'recGU2LGE21U74UVF'
  );
  const dessert = cafes.filter(
    (item) => item.secondCategoryId[0] === 'recUwXSvhzRW2ePyL'
  );
  const atmosphere = cafes.filter(
    (item) => item.secondCategoryId[0] === 'recZuQtNZBNx198JS'
  );
  const work = cafes.filter(
    (item) => item.secondCategoryId[0] === 'recavKfhMI5a7UCmE'
  );
  const nature = cafes.filter(
    (item) => item.secondCategoryId[0] === 'recrlq7SKKROlBl0x'
  );
  const bakery = cafes.filter(
    (item) => item.secondCategoryId[0] === 'recyouPHU8sgXOrhJ'
  );
  const insta = cafes.filter(
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
        tabBarItemStyle: {
          width: 80,
          height: 40,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: colors.primary,
          borderBottomWidth: 2,
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

Cafes.navigationOptions = () => {
  return {
    headerTitle: 'hi',
  };
};
