import StackNavWrapper from '../navigation/stackNavWrapper';
import AppStyles from '../config/styles';
import {
  validateContent,
  validateImei,
  validateLength,
  validateMobile,
} from '../forms/Validation';
import React, {useState,FunctionComponent } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Forms from '../forms/Forms';
import {TextInput} from 'react-native-paper';


const CustomerScreen = (props) => {
  const customerSave = () => {
    alert('save');
  };
  const customer = () => {
    const fields = {
      customerName: {
        label: 'Customer Name',
        type:'text',
        validators: [validateContent, validateLength],
      },
      customerNo: {
        label: 'Mobile No',
        type:'text',
        validators: [validateMobile],
        inputProps: {
          keyboardType: 'phone-pad',
          maxLength: 10,
          returnKeyType: 'next',
        },
      },
      imei1: {
        label: 'IMEI No',
        type:'text',
        inputProps: {
          keyboardType: 'phone-pad',
          maxLength: 16,
        },
        validators: [validateImei],
      },
    };
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Customer</Text>
        </View>
        <Forms
          fields={fields}
          buttonText="Save"
          buttonStyle={{width: 200}}
          action={customerSave}
          elementColor=''
        />
      </View>
    );
  };
  return <StackNavWrapper component={customer} name="Customer" />;
};

const styles = StyleSheet.create({
  header: {
    marginTop: 15,
  },
  headerText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomerScreen;
