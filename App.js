import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from './Context';
import StackNavigator from './navigation/StackNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'SD-UL': require('./assets/fonts/Apple_SD_Gothic_Neo/AppleSDGothicNeoUL.ttf'),
    'SD-L': require('./assets/fonts/Apple_SD_Gothic_Neo/AppleSDGothicNeoL.ttf'),
    'SD-T': require('./assets/fonts/Apple_SD_Gothic_Neo/AppleSDGothicNeoT.ttf'),
    'SD-R': require('./assets/fonts/Apple_SD_Gothic_Neo/AppleSDGothicNeoR.ttf'),
    'SD-M': require('./assets/fonts/Apple_SD_Gothic_Neo/AppleSDGothicNeoM.ttf'),
    'SD-SB': require('./assets/fonts/Apple_SD_Gothic_Neo/AppleSDGothicNeoSB.ttf'),
    'SD-B': require('./assets/fonts/Apple_SD_Gothic_Neo/AppleSDGothicNeoB.ttf'),
    'SD-EB': require('./assets/fonts/Apple_SD_Gothic_Neo/AppleSDGothicNeoEB.ttf'),
    'SD-H': require('./assets/fonts/Apple_SD_Gothic_Neo/AppleSDGothicNeoH.ttf'),
    blackSans: require('./assets/fonts/Black_Han_Sans/BlackHanSans-Regular.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <StoreProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
}
