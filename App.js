import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import ShareEventScreen from './src/screens/ShareEvent/ShareEvent';
import FindEventScreen from './src/screens/FindEvent/FindEvent';

//Register Screens
Navigation.registerComponent("benibla-events.AuthScreen", () => AuthScreen);
Navigation.registerComponent("benibla-events.ShareEventScreen", () => ShareEventScreen);
Navigation.registerComponent("benibla-events.FindEventScreen", () => FindEventScreen);

//Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "benibla-events.AuthScreen",
    title: "Login"
  }
});