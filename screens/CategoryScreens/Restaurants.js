import React from 'react';
import { useGlobalContext } from '../../Context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GridWrapper from '../../components/CategoryScreen/GridWrapper';

const Tab = createMaterialTopTabNavigator();

export default function Restaurants(props) {
  const currentLocation = props.route.params.location;
  const { restaurants } = useGlobalContext();

  let localFilter;
  if (currentLocation === '전체') {
    localFilter = restaurants;
  } else {
    localFilter = restaurants.filter(
      (item) => item.eupmyeondongRi === currentLocation
    );
  }

  const moveToPage = props.route.params.secondCatName;

  const all = localFilter;
  const jok = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'rec9AQaAKvzGDumyT'
  );
  const hamB = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recGCR0nAaarWxMYF'
  );
  const ch = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recKXAHESS8bfL9An'
  );
  const pizza = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recNqj81zO9vo8Y1S'
  );
  const night = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recWjPmQXkel8qmBF'
  );
  const don = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'reccIlp7IP4s9qZJm'
  );
  const west = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'reccSeNPsdGNsP3xA'
  );
  const chick = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recgPMsTtxj5TGmYX'
  );
  const kor = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recijnmBY043chgi0'
  );
  const tang = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recu5oxlWN5AMn7KW'
  );
  const dosi = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recwzwuLim1rnNhBu'
  );
  const salad = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recwpFEyhZ1bKxqcB'
  );
  const bun = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recxY2d5PwVXiKRHP'
  );
  const korN = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'rec7e1fQLpqKa2uXE'
  );
  const gook = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recmL3e8AyRVYq1Xc'
  );
  const gob = localFilter.filter(
    (item) => item.secondCategoryId[0] === 'recLHWFM0c5dDC89u'
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

  function Bun() {
    return (
      <GridWrapper
        data={bun}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function Chi() {
    return (
      <GridWrapper
        data={ch}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function Kor() {
    return (
      <GridWrapper
        data={kor}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function Chick() {
    return (
      <GridWrapper
        data={chick}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function Don() {
    return (
      <GridWrapper
        data={don}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function Pizza() {
    return (
      <GridWrapper
        data={pizza}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function Gob() {
    return (
      <GridWrapper
        data={gob}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function Dosi() {
    return (
      <GridWrapper
        data={dosi}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function Night() {
    return (
      <GridWrapper
        data={night}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function Gook() {
    return (
      <GridWrapper
        data={gook}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function HamB() {
    return (
      <GridWrapper
        data={hamB}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }

  function KorN() {
    return (
      <GridWrapper
        data={korN}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Jok() {
    return (
      <GridWrapper
        data={jok}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Salad() {
    return (
      <GridWrapper
        data={salad}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function West() {
    return (
      <GridWrapper
        data={west}
        navigation={props.navigation}
        route={props.route}
      />
    );
  }
  function Tang() {
    return (
      <GridWrapper
        data={tang}
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
          borderBottomColor: 'black',
          borderBottomWidth: 2,
        },
        lazy: true,
      }}
    >
      <Tab.Screen name='전체' component={All} />
      <Tab.Screen name='한식' component={Kor} />
      <Tab.Screen name='한식(면)' component={KorN} />
      <Tab.Screen name='분식' component={Bun} />
      <Tab.Screen name='중식' component={Chi} />
      <Tab.Screen name='치킨' component={Chick} />
      <Tab.Screen name='돈까스·회' component={Don} />
      <Tab.Screen name='도시락' component={Dosi} />
      <Tab.Screen name='곱창·구이' component={Gob} />
      <Tab.Screen name='국밥' component={Gook} />
      <Tab.Screen name='햄버거' component={HamB} />
      <Tab.Screen name='족발·보쌈' component={Jok} />
      <Tab.Screen name='야식' component={Night} />
      <Tab.Screen name='피자' component={Pizza} />
      <Tab.Screen name='샐러드' component={Salad} />
      <Tab.Screen name='찜·탕·찌개' component={Tang} />
      <Tab.Screen name='아시안·양식' component={West} />
    </Tab.Navigator>
  );
}
