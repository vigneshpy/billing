import StackNavWrapper from '../navigation/stackNavWrapper';
import AppStyles from '../config/styles';
import {
  validateContent,
  validateImei,
  validateLength,
  validateMobile,
} from '../forms/Validation';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Forms from '../forms/Forms';
import {TextInput} from 'react-native-paper';
import SQLiteScreen from '../../containers/api/database';
import Spinner from  '../forms/loader';
const db = new SQLiteScreen();
const CustomerScreen = ({ navigation, route }) => {
  const {itemId}=route.params;
  const [spinner,setSpinner]=useState(false);
  
  useEffect(()=>{
      if(itemId)
        customerSave(itemId);

  },[]);

  const fetchSingleReord=(id)=>{
    
  }

  const customerSave = async (values) => {
    setSpinner(true);
    const customerName = values['customerName'];
    const customerNo = values['customerNo'];
    const imei1 = values['imei1'];
    const query =
      'insert into  bl_customers (customerName,customerNo,imei1) values(?,?,?)';
    //  const query=
    await db.ExecuteQuery(query, [customerName, customerNo, imei1]);
    setSpinner(false);
  };
  const customer = () => {
    const fields = {
      customerName: {
        label: 'Customer Name',
        type: 'text',
        validators: [validateContent, validateLength],
      },
      customerNo: {
        label: 'Mobile No',
        type: 'text',
        validators: [validateMobile],
        inputProps: {
          keyboardType: 'phone-pad',
          maxLength: 10,
          returnKeyType: 'next',
        },
      },
      imei1: {
        label: 'IMEI No',
        type: 'text',
        inputProps: {
          keyboardType: 'phone-pad',
          maxLength: 16,
        },
        validators: [validateImei],
      },
    };
    return (
      <View style={{flex: 1}}>
        <Spinner visible={spinner} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Customer</Text>
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
