import StackNavWrapper from '../navigation/stackNavWrapper';
import AppStyles from '../config/styles';
import {
  validateContent,
  validateImei,
  validateLength,
  validateMobile,
} from '../forms/Validation';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Forms from '../forms/Forms';
import SQLiteScreen from '../../containers/api/database';
import Spinner from '../forms/loader';
const db = new SQLiteScreen();
const ServiceScreen = (props) => {
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    setSpinner(true);
    var results = await db.ExecuteQuery('select * from bl_customers');
    var rows = results.rows;

    var item = [];
    for (let i = 0; i < rows.length; i++) {
      item.push({
        id: rows.item(i).id,
        name: rows.item(i).customerName,
      });
    }
    setData(item);
    setSpinner(false);
    return item;
  };

  const serviceSave = async (values) => {
    const customerName = values['customerName'];
    const serviceName = values['serviceDate'];
    const serviceDate = values['serviceDate'];
    const serviceCharge = values['serviceCharge'];
    const query =
      'insert into  bl_service (customerName,serviceName,serviceDate,serviceCharge) values(?,?,?,?)';
    //  const query=
    const result = await db.ExecuteQuery(query, [
      customerName,
      serviceName,
      serviceDate,
      serviceCharge,
    ]);
  };
  
    const fields = {
      customerName: {
        type: 'autocomplete',
        label: 'Customer Name',
        data: {data},
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
        <Spinner visible={spinner} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Service</Text>
        </View>
        <Forms
          fields={fields}
          buttonText="Save"
          buttonStyle={{width: 200}}
          action={serviceSave}
        />
      </View>
    );
  }
  

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

export default ServiceScreen;
