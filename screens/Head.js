import * as React from 'react';
import { View } from 'react-native';
import { Constants } from 'expo';
import { Header } from 'react-native-elements';

export default class Head extends React.Component {
  render() {
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: 'Doctors Finder', style: { color: '#fff' } }}
          outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
          innerContainerStyles={{ justifyContent: 'space-around' }}
        />
      </View>
    );
  }
}
