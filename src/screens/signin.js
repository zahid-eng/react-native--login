import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomInput from '../components/customInput';

const Signin = () => {
  return (
    <View style={styles.signup}>
      <View>
        <CustomInput placeholder="Enter UserName" icon="account" />
        <CustomInput
          placeholder="Password"
          secureTextEntry={true}
          icon="lock"
        />
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
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
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  signup: {
    width: '95%',
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
