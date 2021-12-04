import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SecondSelectScreen from '../screens/SecondSelectScreen';
import Restaurants from '../screens/CategoryScreens/Restaurants';
import Cafes from '../screens/CategoryScreens/Cafes';
import EventsScreen from '../screens/EventsScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

export default function GemStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='SecondSelect'
        component={SecondSelectScreen}
        options={({ route }) => ({ title: '카테고리' })}
      />
      <Stack.Screen
        name='맛집'
        component={Restaurants}
        options={({ route }) => ({ title: '맛집' })}
      />
      <Stack.Screen
        name='카페'
        component={Cafes}
        options={({ route }) => ({ title: '카페' })}
      />
      <Stack.Screen
        name='Details'
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params.storeName })}
      />
    </Stack.Navigator>
  );
}
