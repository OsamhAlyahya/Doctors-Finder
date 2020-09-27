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
import * as firebase from 'firebase';

export default class SignUp extends React.Component {
  // state = {
  //   username: '',
  //   password: '',
  //   email: '',
  // };
  // onChangeText = (key, val) => {
  //   this.setState({ [key]: val });
  // };
  // signUp = async () => {
  //   const { username, password, email } = this.state;
  //   try {
  //     // here place your signup logic
  //     console.log('user successfully signed up!: ', 'ok');
  //   } catch (err) {
  //     console.log('error signing up: ', err);
  //   }
  // };

   // <TextInput
          //   style={styles.input}
          //   placeholder="Username"
          //   autoCapitalize="none"
          //   placeholderTextColor="white"
          //   onChangeText={(password)=>this.setState({password})}
          // />

    constructor(props){
    super(props)
  this.state = ({
    password: '',
    email: '',
  })
    
  }

signUpUsr =(email,password)=>{

try{

  if(this.state.password.length<6){
    alert("error")
    return;
  }
firebase.auth().createUserWithEmailAndPassword(email,password)
}

catch(error){
  console.log(error.toString());
}
}

  static navigationOptions = {
    title: 'SignUp',
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
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={(password)=>this.setState({password})}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={(email)=>this.setState({email})}
          />

          <Button
            style={styles.bt}
            onPress={() => {
              navigate('Login');
            },this.signUpUsr(this.state.email,this.state.password)}
            title="SignUp"
            color="white"
            backgroundColor="#c60512"
          />

          <Text onPress={() => navigate('Login')} style={styles.text}>
            Already have an account? Click here
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
    margin: 15,
    width: 100,
    height: 45,
  },
  text: {
    position: 'absolute',
    width: 280,
    height: 300,
    top: 450,
    bottom: 0,
    left: 60,
    right: 0,
    color: '#42A5F5',
    fontSize: 17,
  },
  container: {
    marginTop: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
