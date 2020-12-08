import StackNavWrapper from '../navigation/stackNavWrapper';
import AppStyles from '../config/styles';
import {
  validateContent,
  validateImei,
  validateLength,
  validateMobile,
} from '../forms/Validation';
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Forms from '../forms/Forms';
import {TextInput} from 'react-native-paper';

const CustomerScreen = (props) => {
  const customerSave = () => {
    alert('save');
  };
  const service = () => {
    const fields = {
      serviceName: {
        label: 'Service Name',
        validators: [validateContent, validateLength],
  
      },
      customerName: {
        type:'dropdown',
        label: 'Customer Name',
        validators: [validateContent, validateMobile],
        inputProps: {
          keyboardType:'phone-pad',
          maxLength: 10,
          returnKeyType:'next'
        },
      },
      serviceDate: {
        type:'date',
        label: 'Serviced Date',
        inputProps: {
          keyboardType:'phone-pad',
          maxLength: 16,
        },
        validators: [validateContent, validateImei],
      },
      serviceCharge: {
        label: 'Serviced Charge',
        inputProps: {
          keyboardType:'phone-pad',
          maxLength: 16,
        },
        validators: [validateContent, validateImei],
      },
    };
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
        <Text style={styles.headerText}>
           Service
        </Text>
        </View>
        <Forms fields={fields} buttonText="Save"  buttonStyle={{width:200}} 
        action={customerSave}/>
      </View>
    );
  };
  return <StackNavWrapper component={service} name="Customer" />;
};

const styles = StyleSheet.create({
header:{
margin:10
},
headerText:{
  textAlign: 'center', 
  justifyContent: 'center',
  fontSize:18
}


});

export default CustomerScreen;
