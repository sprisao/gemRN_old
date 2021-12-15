import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SecondSelectScreen from '../screens/SecondSelectScreen';
import Restaurants from '../screens/CategoryScreens/Restaurants';
import Cafes from '../screens/CategoryScreens/Cafes';
import DetailsScreen from '../screens/DetailsScreen';
import Curations from '../screens/Curations';

import LocationPicker from '../components/CategoryScreen/LocationPicker';
import DetailsHeaderRight from '../components/DetailsScreen/HeaderRight';
import { Ionicons } from '@expo/vector-icons';

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
        options={({ route }) => ({
          title: '카테고리',
          headerBackImage: () => (
            <Ionicons
              name='ios-chevron-back'
              size={24}
              color='black'
              style={{ marginLeft: 10 }}
            />
          ),
          headerBackTitleStyle: { color: '#666666', fontSize: 15 },
          headerTintColor: 'black',
          headerTitleStyle: {
            color: 'black',
          },
        })}
      />
      <Stack.Screen
        name='맛집'
        component={Restaurants}
        options={({ route, navigation }) => ({
          title: '맛집',
          headerBackImage: () => (
            <Ionicons
              name='ios-chevron-back'
              size={24}
              color='black'
              style={{ marginLeft: 10 }}
            />
          ),
          headerBackTitleStyle: { color: '#666666', fontSize: 15 },
          headerTintColor: 'black',
          headerTitleStyle: {
            color: 'black',
          },
          headerRight: () => (
            <LocationPicker navigation={navigation} route={route} />
          ),
        })}
      />
      <Stack.Screen
        name='카페'
        component={Cafes}
        options={({ route, navigation }) => ({
          title: '카페',
          headerBackImage: () => (
            <Ionicons
              name='ios-chevron-back'
              size={24}
              color='black'
              style={{ marginLeft: 10 }}
            />
          ),
          headerBackTitleStyle: { color: '#666666', fontSize: 15 },
          headerTintColor: 'black',
          headerTitleStyle: {
            color: 'black',
          },
          headerRight: () => (
            <LocationPicker navigation={navigation} route={route} />
          ),
        })}
      />
      <Stack.Screen
        name='Curations'
        component={Curations}
        options={({ route, navigation }) => ({
          title: '젬 큐레이션 ✨',
          headerBackImage: () => (
            <Ionicons
              name='ios-chevron-back'
              size={24}
              color='black'
              style={{ marginLeft: 10 }}
            />
          ),
          headerBackTitleStyle: { color: '#666666', fontSize: 15 },
          headerTintColor: 'black',
          headerTitleStyle: {
            color: 'black',
          },
        })}
      />

      <Stack.Screen
        name='Details'
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.storeName,
          // headerTransparent: true,
          headerBackTitleStyle: { color: 'transparent', fontSize: 15 },
          headerTintColor: 'black',
          // headerTitleStyle: {
          //   color: 'transparent',
          // },
          headerBackImage: () => (
            <Ionicons
              name='ios-chevron-back'
              size={24}
              color='black'
              style={{ marginLeft: 10 }}
            />
          ),
          headerRight: () => <DetailsHeaderRight />,
        })}
      />
    </Stack.Navigator>
  );
}
