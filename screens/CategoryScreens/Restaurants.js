import React from 'react';
import { useGlobalContext } from '../../Context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GridWrapper from '../../components/CategoryScreen/GridWrapper';
import colors from '../../constants/styleSettings/colors';
// import TopTabNavigation from './TopTabNavigator';

const Tab = createMaterialTopTabNavigator();

export default function Restaurants(props) {
  const { restaurants } = useGlobalContext();
  const moveToPage = props.route.params.secondCatName;

  const all = restaurants;
  const jok = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'rec9AQaAKvzGDumyT'
  );
  const hamB = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'recGCR0nAaarWxMYF'
  );
  const ch = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'recKXAHESS8bfL9An'
  );
  const pizza = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'recNqj81zO9vo8Y1S'
  );
  const night = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'recWjPmQXkel8qmBF'
  );
  const don = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'reccIlp7IP4s9qZJm'
  );
  const west = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'reccSeNPsdGNsP3xA'
  );
  const chick = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'recgPMsTtxj5TGmYX'
  );
  const kor = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'recijnmBY043chgi0'
  );
  const tang = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'recu5oxlWN5AMn7KW'
  );
  const dosi = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'recwzwuLim1rnNhBu'
  );
  const salad = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'recwpFEyhZ1bKxqcB'
  );
  const bun = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'recxY2d5PwVXiKRHP'
  );
  const korN = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'rec7e1fQLpqKa2uXE'
  );
  const gook = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'recmL3e8AyRVYq1Xc'
  );
  const gob = restaurants.filter(
    (item) => item.secondCategoryId[0] === 'recLHWFM0c5dDC89u'
  );

  function All() {
    return <GridWrapper data={all} />;
  }

  function Bun() {
    return <GridWrapper data={bun} />;
  }

  function Chi() {
    return <GridWrapper data={ch} />;
  }

  function Kor() {
    return <GridWrapper data={kor} />;
  }

  function Chick() {
    return <GridWrapper data={chick} />;
  }

  function Don() {
    return <GridWrapper data={don} />;
  }

  function Pizza() {
    return <GridWrapper data={pizza} />;
  }

  function Gob() {
    return <GridWrapper data={gob} />;
  }

  function Dosi() {
    return <GridWrapper data={dosi} />;
  }

  function Night() {
    return <GridWrapper data={night} />;
  }

  function Gook() {
    return <GridWrapper data={gook} />;
  }

  function HamB() {
    return <GridWrapper data={hamB} />;
  }

  function KorN() {
    return <GridWrapper data={korN} />;
  }
  function Jok() {
    return <GridWrapper data={jok} />;
  }
  function Salad() {
    return <GridWrapper data={salad} />;
  }
  function West() {
    return <GridWrapper data={west} />;
  }
  function Tang() {
    return <GridWrapper data={tang} />;
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
      <Tab.Screen name='한식' component={Kor} />
      <Tab.Screen name='한식(면)' component={KorN} />
      <Tab.Screen name='분식' component={Bun} />
      <Tab.Screen name='중식' component={Chi} />
      <Tab.Screen name='치킨' component={Chick} />
      <Tab.Screen name='돈까스' component={Don} />
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
