import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SecondSelectScreen from '../screens/SecondSelectScreen';
import Restaurants from '../screens/CategoryScreens/Restaurants';
import Cafes from '../screens/CategoryScreens/Cafes';
import DetailsScreen from '../screens/DetailsScreen';
import Curations from '../screens/Curations';

import Bars from '../screens/CategoryScreens/Bars';
import Beauties from '../screens/CategoryScreens/Beauties';
import Educations from '../screens/CategoryScreens/Educations';
import FlowerShops from '../screens/CategoryScreens/FlowerShops';
import Gyms from '../screens/CategoryScreens/Gyms';
import Kids from '../screens/CategoryScreens/Kids';
import Pets from '../screens/CategoryScreens/Pets';
import Photos from '../screens/CategoryScreens/Photos';

import SpotsSelectScreen from '../screens/SpotsSelectScreen';

import Spots from '../screens/CategoryScreens/Spots';

import LocationPicker from '../components/CategoryScreen/LocationPicker';
import DetailsHeaderRight from '../components/DetailsScreen/HeaderRight';
import { Ionicons } from '@expo/vector-icons';

import CategoryTest from '../screens/CategoryScreens/CategoryTest';
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
          title: '카테고리',
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
        name='맛집'
        component={Restaurants}
        options={({ route, navigation }) => ({
          title: '맛집',
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
        name='테스트'
        component={CategoryTest}
        options={({ route, navigation }) => ({
          title: '테스트',
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
        name='카페'
        component={Cafes}
        options={({ route, navigation }) => ({
          title: '카페',
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
        name='호프・주점'
        component={Bars}
        options={({ route, navigation }) => ({
          title: '호프・주점',
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
        name='미용・뷰티'
        component={Beauties}
        options={({ route, navigation }) => ({
          title: '미용・뷰티',
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
        name='운동・헬스'
        component={Gyms}
        options={({ route, navigation }) => ({
          title: '운동・헬스',
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
        name='사진'
        component={Photos}
        options={({ route, navigation }) => ({
          title: '사진',
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
        name='반려동물'
        component={Pets}
        options={({ route, navigation }) => ({
          title: '반려동물',
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
        name='꽃'
        component={FlowerShops}
        options={({ route, navigation }) => ({
          title: '꽃',
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
        name='키즈'
        component={Kids}
        options={({ route, navigation }) => ({
          title: '키즈',
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
        name='교육・학원'
        component={Educations}
        options={({ route, navigation }) => ({
          title: '교육・학원',
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
        })}
      />
    </Stack.Navigator>
  );
}
