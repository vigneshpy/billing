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
import axios from 'axios';
import {API_ROOT} from '../../constants';
import {getConfigForHeader} from '../../utilities/utilities';
import {API_ID_FOR_CUSTOMER} from './constants';

const CustomerScreen = ({navigation, route}) => {
  const itemid = pathOr('', ['params', 'id'], route);

  const [loader, setLoader] = useState(false);
  const [loadedData, setLoadedData] = useState({});

  useEffect(() => {
    if (itemid) console.log(itemid);
    fetchSingleReord(itemid);
  }, [itemid]);

  const fetchSingleReord = async (id) => {
    axios
      .get(
        `${API_ROOT}/customername/${id}`,
        getConfigForHeader(API_ID_FOR_CUSTOMER),
      )
      .then((res) => {
        const data = pathOr([], ['data'], res);
        console.log(
          '🚀 ~ file: CustomerScreen.tsx ~ line 40 ~ .then ~ data',
          data,
        );
        setLoadedData(data);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err, 'err');
      });
  };

  const customerSave = (values) => {
    setLoader(true);
    const customer_name = pathOr('', ['customerName'], values);
    const customer_phone_number = pathOr('', ['customerNo'], values);
    const customer_imei_number = pathOr('', ['imei1'], values);

    const data = {customer_name, customer_phone_number, customer_imei_number};

    if (itemid) {
      axios
        .put(
          `${API_ROOT}/customername/${itemid}`,
          data,
          getConfigForHeader(API_ID_FOR_CUSTOMER),
        )
        .then((res) => {})
        .catch((err) => {
          console.log(err, 'err');
        });
    } else {
      axios
        .post(
          `${API_ROOT}/customername`,
          data,
          getConfigForHeader(API_ID_FOR_CUSTOMER),
        )
        .then((res) => {})
        .catch((err) => {
          console.log(err, 'err');
        });
    }

    setLoader(false);
  };

  const fields = {
    customer_name: {
      label: 'Customer Name',
      type: 'text',
      validators: [validateContent, validateLength],
    },
    customer_phone_number: {
      label: 'Mobile No',
      type: 'text',
      validators: [validateMobile],
      inputProps: {
        keyboardType: 'phone-pad',
        maxLength: 10,
        returnKeyType: 'next',
      },
    },
    customer_imei_number: {
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
      <Spinner visible={loader} />
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
