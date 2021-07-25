import StackNavWrapper from '../navigation/stackNavWrapper';
import AppStyles from '../config/styles';
import {
  validateContent,
  validateImei,
  validateLength,
  validateMobile,
} from '../forms/Validation';
import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Forms from '../forms/Forms';
import Spinner from '../forms/loader';
import {pathOr} from 'ramda';

const CustomerScreen = ({navigation, route}) => {
  const itemid = pathOr('', ['params', 'id'], route);

  const [spinner, setSpinner] = useState(false);
  const [loadedData, setLoadedData] = useState({});

  useEffect(() => {
    if (itemid)
      //  console.log(itemid);
      fetchSingleReord(itemid);
  }, [itemid]);

  const fetchSingleReord = async (id) => {
   
  };

  const customerSave = async (values) => {
    setSpinner(true);

    setSpinner(false);
  };

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
        afterSubmit={() => navigation.navigate('customerlist')}
      />
    </View>
  );
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
