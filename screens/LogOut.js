import React, { Component } from 'react';
import {
  View,
  AppRegistry,
  TextInput,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { Constants } from 'expo';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Lis from './Lis';
import { TabNavigator } from 'react-navigation';


export default class LogOut extends Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            navigate('Home');
          }}
          title="LogOut"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});