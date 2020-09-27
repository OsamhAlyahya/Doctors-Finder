import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Button,
  Image,
} from 'react-native';
import { Constants } from 'expo';
import { Header, Icon } from 'react-native-elements';

export default class Photo extends React.Component {
  render() {
    return (
      <View>
        <Image style={styles.ph} source={require('./logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ph: {
    position: 'absolute',
    width: 300,
    height: 300,
    top: 30,
    bottom: 0,
    left: 38,
    right: 0,
  },
});
