import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import colors from '../constants/styleSettings/colors';

const Tab = createMaterialTopTabNavigator();

import Res_Sec_Bun from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_Ch from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_Chick from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_Don from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_Dosi from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_Gob from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_Gook from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_HamB from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_Jok from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_Kor from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_KorN from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_Night from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_Pizza from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_Salad from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_Tang from '../components/CategoryScreen/restaurants/Res_Sec_Bun';
import Res_Sec_West from '../components/CategoryScreen/restaurants/Res_Sec_Bun';

const Restaurants = (props) => {
  console.log('props', props.route.params.second);
  return (
    <Tab.Navigator
      initialRouteName={props.route.params.secondCatName}
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          width: 100,
          backgroundColor: 'green',
        },
      }}
    >
      <Tab.Screen name='한식' component={Res_Sec_Kor} />
      <Tab.Screen name='한식(면)' component={Res_Sec_KorN} />
      <Tab.Screen name='분식' component={Res_Sec_Bun} />
      <Tab.Screen name='중식' component={Res_Sec_Ch} />
      <Tab.Screen name='치킨' component={Res_Sec_Chick} />
      <Tab.Screen name='돈까스' component={Res_Sec_Don} />
      <Tab.Screen name='도시락' component={Res_Sec_Dosi} />
      <Tab.Screen name='곱창·구이' component={Res_Sec_Gob} />
      <Tab.Screen name='국밥' component={Res_Sec_Gook} />
      <Tab.Screen name='햄버거' component={Res_Sec_HamB} />
      <Tab.Screen name='족발' component={Res_Sec_Jok} />
      <Tab.Screen name='야식' component={Res_Sec_Night} />
      <Tab.Screen name='피자' component={Res_Sec_Pizza} />
      <Tab.Screen name='샐러드' component={Res_Sec_Salad} />
      <Tab.Screen name='찜·탕·찌개' component={Res_Sec_Tang} />
      <Tab.Screen name='아시안·양식' component={Res_Sec_West} />
    </Tab.Navigator>
  );
};

export default Restaurants;

const styles = StyleSheet.create({});
