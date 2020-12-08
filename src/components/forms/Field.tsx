import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';

const Field = ({fieldName, field, value, onChangeText, error,key,color}) => {
  
  return (
    <View>
      <TextInput
        label={field.label}
        value={value}
        style={styles.input}
        onChangeText={(text) => onChangeText(fieldName, text)}
        mode="outlined"
        theme={{ colors: { primary: color,underlineColor:'transparent',}}}
        {...field.inputProps}
      />
      
      <HelperText type="error">{error}</HelperText>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
  },
});

export default Field;
