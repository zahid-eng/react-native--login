import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CustomInput from '../components/customInput';

const Signup = () => {
  return (
    <View style={styles.signup}>
      <>
        <CustomInput placeholder="First Name" icon="account" />
        <CustomInput placeholder="Last Name" icon="account-outline" />
        <CustomInput
          placeholder="Password"
          icon="lock"
          secureTextentry={true}
        />
        <CustomInput
          placeholder="Confirm Password"
          icon="lock"
          secureTextentry={true}
        />
        {/* <TextInput
          placeholder="FirstName"
          style={styles.input}
          placeholderTextColor="black"
        />

        <TextInput
          placeholder="LastName"
          style={styles.input}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          placeholderTextColor="black"
        /> */}
      </>
      <TouchableOpacity
        style={{
          width: '95%',
          backgroundColor: 'green',
          opacity: 0.9,
          height: 60,
          marginTop: 40,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: 30,
        }}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signup: {
    width: '100%',
  },
  input: {
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 2.5,
    opacity: 0.3,
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: 'red',
  },
});
