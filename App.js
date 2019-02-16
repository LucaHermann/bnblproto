import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import ShareEventScreen from './src/screens/ShareEvent/ShareEvent';
import FindEventScreen from './src/screens/FindEvent/FindEvent';
import EventDetailScreen from './src/screens/EventDetail/EventDetail';
import configStore from './src/store/configStore';

const store = configStore();

//Register Screens
Navigation.registerComponent(
  "benibla-events.AuthScreen", 
  () => AuthScreen, 
  store, 
  Provider);
Navigation.registerComponent(
  "benibla-events.ShareEventScreen", 
  () => ShareEventScreen, 
  store, 
  Provider);
Navigation.registerComponent(
  "benibla-events.FindEventScreen", 
  () => FindEventScreen, 
  store, 
  Provider);
  Navigation.registerComponent(
    "benibla-events.EventDetailScreen", 
    () => EventDetailScreen);
  

//Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "benibla-events.AuthScreen",
    title: "Login"
  }
});