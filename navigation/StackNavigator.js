import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SecondSelectScreen from '../screens/SecondSelectScreen';
import CategoryScreen from '../screens/CategoryScreens/CategoryScreen';
import Restaurants from '../screens/CategoryScreens/Restaurants';
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
        options={({ route }) => ({ title: route.params.categoryName })}
      />
      <Stack.Screen
        name='Category'
        component={CategoryScreen}
        options={({ route }) => ({ title: route.params.secondCatName })}
      />
      <Stack.Screen
        name='Restaurants'
        component={Restaurants}
        options={({ route }) => ({ title: route.params.secondCatName })}
      />
      <Stack.Screen
        name='Details'
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params.secondCatName })}
      />
    </Stack.Navigator>
  );
}
