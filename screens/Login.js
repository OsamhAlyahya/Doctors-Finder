import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import { Constants } from 'expo';
import { Button } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Head from './Head';
import Photo from './images/Photo';
import Lis from './Lis';

export default class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const { username, password } = this.state;
    try {
      // here place your signup logic
      console.log('user successfully Logedin!: ', 'ok');
    } catch (err) {
      console.log('error Log in: ', err);
    }
  };

  static navigationOptions = {
    title: 'Login',
    headerLeft: null,
    gesturesEnabled: false,
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
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: 800,
        }}>
        <Photo />

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText('username', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText('password', val)}
          />

          <Button
            style={styles.bt}
            onPress={() => {
              navigate('Tabs');
            }}
            title="Login"
            color="white"
            backgroundColor="#c60512"
          />

          <Text onPress={() => navigate('SignUp')} style={styles.text}>
            Create new account
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#c60512',
    margin: 7,
    padding: 8,
    color: 'white',
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '500',
    opacity: 1,
  },

  bt: {
    width: 100,
    height: 44,
    margin: 15,
  },
  text: {
    position: 'absolute',
    width: 200,
    height: 300,
    top: 220,
    bottom: 0,
    left: 115,
    right: 0,
    color: '#42A5F5',
    fontSize: 17,
  },
  container: {
    marginTop: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
});