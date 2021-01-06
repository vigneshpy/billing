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
import SQLiteScreen from '../../containers/api/database';
import Spinner from  '../forms/loader';
import {pathOr} from "ramda";
const db = new SQLiteScreen();
const CustomerScreen = ({ navigation, route }) => {
  const itemid=pathOr('',['params','id'],route);
  console.log(itemid);
  const [spinner,setSpinner]=useState(false);
  const [loadedData,setLoadedData]=useState({});
  
  useEffect(()=>{
     if(itemid)
        fetchSingleReord(itemid);

  },[itemid]);

  const fetchSingleReord=async(id)=>{
    const query =
      'select * from  bl_customers where id=?';
    //  const query=
    const result=await db.ExecuteQuery(query, [id]);
    var rows = result.rows;
    console.log("rows.item(0)");
    console.log(rows.item(0));
    setLoadedData(rows.item(0));
  }

  const customerSave = async (values) => {
    setSpinner(true);
    const customerName = values['customerName'];
    const customerNo = values['customerNo'];
    const imei1 = values['imei1'];
    if(itemid){
    var query ='update  bl_customers set customerName=?,customerNo=?,imei1=? where id=?';
    await db.ExecuteQuery(query, [customerName, customerNo, imei1,itemid]); 
   }
    else{
    var query ='insest into  bl_customers (customerName,customerNo,imei1) values(?,?,?)';
    await db.ExecuteQuery(query, [customerName, customerNo, imei1]);   
  }  
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
          loadedData={loadedData}
          afterSubmit={()=>navigation.navigate('ListCustomer')}
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
