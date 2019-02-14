import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configStore from './src/store/configStore';
import App from './App';
import { name as appName } from './app.json';

const store = configStore();

const RNRedux = () => (
  <Provider store={store} >
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
