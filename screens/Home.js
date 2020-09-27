import React, { Component } from 'react';
import {
  View,
  AppRegistry,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';

import Photo from './images/Photo';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.state = { pass: '' };
  }
  static navigationOptions = {
    title: 'Doctors Finder',
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
        <Photo/>
        <View style={styles.container}>
        <Button
            style={styles.bt}
            onPress={() => {
              navigate('Login');
            }}
            title="Login  > "
            color="white"
            backgroundColor="#c60512"
          />

                 <Button
            style={styles.bt1}
            onPress={() => {
              navigate('Tabs');
            }}
            title="Enter without registering  >"
            color="white"
            backgroundColor="#c60512"

          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 550,
    
  },
  bt: {
     width: 100,
    height: 80,
    left: 120,
  },
   bt1: {
     width: 250,
    height: 80,
    left: 45,
   },
});