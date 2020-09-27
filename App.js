import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Button,
  Image,
} from 'react-native';
import { Provider } from 'react-redux';
import { Constants } from 'expo';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Lis from './screens/Lis';
import Home from './screens/Home';
import Tabs from './screens/Tabs';
import LogOut from './screens/LogOut';

const App = StackNavigator(
  {
    Home: { screen: Home },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Tabs: { screen: Tabs },
    LogOut: { screen: LogOut },
    Lis: { screen: Lis },
  }
  //   {
  //     mode: 'modal',
  //     headerMode: 'none',
  //     defaultNavigationOptions: {
  //       gesturesEnabled: false, // Disable Swipe Gesture
  //     },
  //     transitionConfig: () => ({
  //       transitionSpec: {
  //         duration: 0, // Disable Transition Animation
  //       },
  //     }),
  //   }
  // );
);
export default App;