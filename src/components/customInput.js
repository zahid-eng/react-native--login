import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomInput = ({
  icon,
  placeholder,
  text,
  onTextChanged = () => {},
  iconSize = 25,
  secureTextentry = false,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 2.5,
        opacity: 0.3,
        margin: 15,
      }}>
      <Icon name={icon} size={iconSize} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={'gray'}
        text={text}
        onChangeText={onTextChanged}
        secureTextEntry={secureTextentry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
  },
});

export default CustomInput;
