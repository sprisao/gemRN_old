import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SecondSelectScreen from '../screens/SecondSelectScreen';
import CategoryScreen from '../screens/CategoryScreens/CategoryScreen';
import DetailsScreen from '../screens/DetailsScreen';
import DetailsCuration from '../components/CurationScreen/DetailsCuration';
import Curations from '../screens/Curations';

import SpotsSelectScreen from '../screens/SpotsSelectScreen';

import Spots from '../screens/CategoryScreens/Spots';

import LocationPicker from '../components/CategoryScreen/LocationPicker';
import DetailsHeaderRight from '../components/DetailsScreen/HeaderRight';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function GemStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='홈'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='SecondSelect'
        component={SecondSelectScreen}
        options={({ route }) => ({
          title: route.params.categoryName,
          headerBackImage: () => (
            <Ionicons
              name='ios-chevron-back'
              size={20}
              color='black'
              style={{ marginLeft: 10 }}
            />
          ),
          headerBackTitleStyle: { color: 'black', fontSize: 15 },
          headerTintColor: 'black',
          headerTitleStyle: {
            color: 'black',
          },
        })}
      />

      <Stack.Screen
        name='CategoryScreen'
        component={CategoryScreen}
        options={({ route, navigation }) => ({
          title: route.params.categoryName,
          headerBackImage: () => (
            <Ionicons
              name='ios-chevron-back'
              size={20}
              color='black'
              style={{ marginLeft: 10 }}
            />
          ),
          headerBackTitleStyle: { color: 'black', fontSize: 15 },
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
              size={20}
              color='black'
              style={{ marginLeft: 10 }}
            />
          ),
          headerBackTitleStyle: { color: 'black', fontSize: 15 },
          headerTintColor: 'black',
          headerTitleStyle: {
            color: 'black',
          },
        })}
      />

      <Stack.Screen
        name='SpotSelect'
        component={SpotsSelectScreen}
        options={({ route, navigation }) => ({
          title: '카테고리',
          headerBackImage: () => (
            <Ionicons
              name='ios-chevron-back'
              size={20}
              color='white'
              style={{ marginLeft: 10 }}
            />
          ),
          headerBackTitleStyle: { color: 'white', fontSize: 15 },
          headerTransparent: true,
          headerTintColor: 'white',
          headerTitleStyle: {
            color: 'transparent',
          },
        })}
      />

      <Stack.Screen
        name='Spots'
        component={Spots}
        options={({ route, navigation }) => ({
          title: '가볼만한 곳',
          headerBackImage: () => (
            <Ionicons
              name='ios-chevron-back'
              size={20}
              color='black'
              style={{ marginLeft: 10 }}
            />
          ),
          headerBackTitleStyle: { color: 'black', fontSize: 15 },
          // headerTransparent: true,
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
              size={20}
              color='black'
              style={{ marginLeft: 10 }}
            />
          ),
          headerRight: () => <DetailsHeaderRight />,
          ...TransitionPresets.ModalPresentationIOS,
        })}
      />
      <Stack.Screen
        name='DetailsCuration'
        component={DetailsCuration}
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
              size={20}
              color='black'
              style={{ marginLeft: 10 }}
            />
          ),
          headerRight: () => <DetailsHeaderRight />,
          ...TransitionPresets.ModalPresentationIOS,
        })}
      />
    </Stack.Navigator>
  );
}
