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
import {API_ROOT} from '../../constants'
import { getConfigForHeader } from '../../utilities/utilities';
import { API_ID_FOR_MOBILE_NAME } from './constants';

const MobileScreen = ({navigation, route}) => {
  const itemid = pathOr('', ['params', 'id'], route);
  const [spinner, setSpinner] = useState(false);
  const [loadedData, setLoadedData] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (itemid) console.log(itemid);
    fetchSingleReord(itemid);
  }, [itemid]);


  const fetchSingleReord = async (id) => {
    axios
    .get(
      `${API_ROOT}/mobilename/${id}`,
      getConfigForHeader(API_ID_FOR_MOBILE_NAME),
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
    console.log("values",values)
    setSpinner(true);
    const mobile_name = pathOr('',['mobileName'],values);
    const data = {mobile_name};
    console.log(data)

     axios.post(`${API_ROOT}/mobilename`,data,getConfigForHeader(API_ID_FOR_MOBILE_NAME))
    .then((res)=>{
      console.log("mob")
  }).catch((err)=>{
    console.log(err,"err")
  })
    setSpinner(false);
  };

  const fields = {
    mobileName: {
      label: 'mobile Name',
      type: 'text',
      validators: [validateContent, validateLength],
      errorText:'Mobile Name cannot be empty'
    }
  };
  return (
    <View style={{flex: 1}}>
      <Spinner visible={spinner} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Mobile</Text>
      </View>
      <Forms
        fields={fields}
        buttonText="Save"
        buttonStyle={{width: 200}}
        action={customerSave}
        loadedData={loadedData}
        afterSubmit={() => navigation.navigate('mobilelist')}
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

export default MobileScreen;
