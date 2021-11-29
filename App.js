import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
// import { StoreProvider } from './context';

import Header from './components/Header';

import HomeScreen from './components/HomeScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'notoSans-Black': require('./assets/fonts/Noto_Sans_KR/NotoSansKR-Black.otf'),
    'notoSans-Bold': require('./assets/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf'),
    'notoSans-Medium': require('./assets/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf'),
    'notoSans-Regular': require('./assets/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf'),
    'notoSans-Light': require('./assets/fonts/Noto_Sans_KR/NotoSansKR-Light.otf'),
    'notoSans-Thin': require('./assets/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf'),
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
    // <StoreProvider>
    <View style={styles.container}>
      <Header />
      <HomeScreen />
    </View>
    // {/* </StoreProvider> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
