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
  const getData=()=>{
    alert('customername')

  }
  const service = () => {
    const fields = {

      customerName: {
        type: 'autocomplete',
        label: 'Customer Name',
        data:{getData},
        validators: [validateContent],
        inputProps: {
          returnKeyType: 'next',
        },
      },
      serviceName: {
        label: 'Service Name',
        type: 'text',
        validators: [validateContent, validateLength],
      },
     
      serviceDate: {
        type: 'date',
        label: 'Serviced Date',
        validators: [validateContent],
      },
      serviceCharge: {
        label: 'Serviced Charge',
        inputProps: {
          keyboardType: 'phone-pad',
          maxLength: 10,
        },
        validators: [validateContent],
      },
    };
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Service</Text>
        </View>
        <Forms
          fields={fields}
          buttonText="Save"
          buttonStyle={{width: 200}}
          action={customerSave}
        />
      </View>
    );
  };
  return <StackNavWrapper component={service} name="Customer" />;
};

const styles = StyleSheet.create({
  header: {
    margin: 10,
  },
  headerText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
});

export default CustomerScreen;
