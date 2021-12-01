import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SecondSelectScreen from '../screens/SecondSelectScreen';
import CategoryScreen from '../screens/CategoryScreen';
import EventsScreen from '../screens/EventsScreen';
import DetailsScreen from '../screens/DetailsScreen';

const GemNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  SecondSelect: {
    screen: SecondSelectScreen,
  },
  Category: {
    screen: CategoryScreen,
  },
});

export default createAppContainer(GemNavigator);
