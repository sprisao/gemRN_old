import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../../constants/styleSettings/colors';
const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigation(props) {
  return (
    <Tab.Navigator
      initialRouteName={props.moveToPage}
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
      {props.children}
    </Tab.Navigator>
  );
}
