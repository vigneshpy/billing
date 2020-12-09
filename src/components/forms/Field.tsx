import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import DatePicker from './DateField';
const Field = ({fieldName, field, value, onChangeText, error, key, color}) => {
  const fieldType = field.type;
  console.log('props');
  const renderField = (type: string) => {
    if (type == 'text' || type == '' || type == undefined) {
      return (
        <TextInput
          label={field.label}
          value={value}
          style={styles.input}
          onChangeText={(text) => onChangeText(fieldName, text)}
          mode="outlined"
          theme={{colors: {primary: color, underlineColor: 'transparent'}}}
          {...field.inputProps}
        />
      )
    }
    else if(type=="date"){
      return  (
        <DatePicker style={styles.input}  label={field.label}  value={value} onChangeText={(text) => onChangeText(fieldName, text)} 
        mode="outlined"
        theme={{colors: {primary: color, underlineColor: 'transparent'}}}
        {...field.inputProps}
        />
      )
    }
  };

  return (
    <View>
      {renderField(fieldType)}
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
