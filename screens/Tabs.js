import * as React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer,
  DrawerNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BottomNavigation, Text } from 'react-native-paper';
import { StackNavigator } from 'react-navigation';

import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Button,
  Image,
} from 'react-native';
import { Provider } from 'react-redux';
import { Constants } from 'expo';
import SignUp from './SignUp';
import Login from './Login';
import Lis from './Lis';
import Home from './Home';
import LogOut from './LogOut';
import { TabNavigator } from 'react-navigation';



const Navegador = DrawerNavigator(
  {
    List: { screen: Lis },
    LogOut: { screen: LogOut },
  },
  {
    drawerPosition: 'left',
    drawerWidth: 200,
    drawerBackgroundColor: 'white',
    contentOptions: {
      activeTintColor: '#c60512',
      inactiveTintColor: '#c60512',
      activeBackgroundColor: 'white',
      inactiveBackgroundColor: 'white',
      itemsContainerStyle: {
        marginTop: -48,
      },
      itemStyle: {
        marginTop: 5,
      },
      labelStyle: {
        fontSize: 24,
      },
      iconContainerStyle: {
        backgroundColor: 'blue',
      },
    },
  }
);

const Nav = StackNavigator(
  {
     Lis: { screen: Navegador },
     Home: { screen: Home },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    LogOut: { screen: LogOut },

  });

  Navegador.navigationOptions = { header: null }


// const RootStack = TabNavigator(
//   {
//     List: {
//       screen: Lis,
//     },
//     Options: {
//       screen: ,
//     },
//   },
//   {
//     initialRouteName: 'List',
//     animationEnabled: true,
//     tabBarOptions: {
//       activeTintColor: 'white',
//       activeBackgroundColor: '#c60512',
//       labelStyle: {
//         fontSize: 20,
//       },
//     },
//   }
// );

export default class Tabs extends React.Component {
  static navigationOptions = {
    // title: 'Find a doctor',
    title: 'Doctors Finder',
    headerLeft: null, // <<<back arrow>>>>
    gesturesEnabled: false, // <<Swiping>>
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#c60512',
      borderBottomColor: '#c60512',
      borderBottomWidth: 1,
    },
    headerTitleStyle: {
      fontSize: 24,
    },
  };
  render() {
    return (
       <Nav />

    );
  }
}

