import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Infos from './Infos';
import colors from '../../constants/styleSettings/colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const DetailsTopTabNavi = (props) => {
  const Tab = createMaterialTopTabNavigator();

  function menu() {
    return (
      <View>
        <Text>메뉴보여줘</Text>
      </View>
    );
  }

  return (
    <Tab.Navigator
      // initialRouteName={moveToPage}
      screenOptions={{
        // tabBarScrollEnabled: true,
        tabBarItemStyle: {
          // width: 80,
          // height: 40,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: colors.primary,
          borderBottomWidth: 2,
        },
        lazy: true,
      }}
    >
      <Tab.Screen name='메뉴' component={menu} initialParams={storeData} />
      <Tab.Screen name='상세정보' component={Infos} initialParams={storeData} />
    </Tab.Navigator>
  );
};

export default DetailsTopTabNavi;

const styles = StyleSheet.create({});
