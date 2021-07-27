import React, {useEffect, useState} from 'react';
import StackNavWrapper from '../navigation/stackNavWrapper';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Loader from '../forms/loader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import axios from 'axios';
import {API_ROOT} from '../../constants';
import {getConfigForHeader} from '../../utilities/utilities';
import {API_ID_FOR_CUSTOMER} from '../Screens/constants';
import {pathOr} from 'ramda';
import Spinner from 'react-native-loading-spinner-overlay';
const ListCustomer = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [value, setValue] = useState([]);
  useEffect(() => {
    loadCustomer();
    const subscribe = navigation.addListener('focus', () => {
      loadCustomer();
    });

    return subscribe;
  }, []);

  const loadCustomer = async () => {
    setLoader(true);
    axios
      .get(
        `${API_ROOT}/customername/all`,
        getConfigForHeader(API_ID_FOR_CUSTOMER),
      )
      .then((res) => {
        const data = pathOr([], ['data', 'results'], res);
        setLoader(false);
        console.log(
          '🚀 ~ file: customerList.tsx ~ line 35 ~ .then ~ res',
          data,
        );
        setValue(data);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err, 'err');
      });
  };

  const removeCustomer = (id: any) => {
    setLoader(true);
    axios
      .delete(
        `${API_ROOT}/customername/${id}`,
        getConfigForHeader(API_ID_FOR_CUSTOMER),
      )
      .then((res) => {
        loadCustomer();
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err, 'err');
      });
  };



  const renderList = (customer) => {
    console.log(
      '🚀 ~ file: customerList.tsx ~ line 47 ~ renderList ~ item',
      customer,
    );

    return (
      <View>
        <Spinner visible={loader} />

        <Card style={styles.container}>
          <Card.Content>
            <Title>{customer.customer_name}</Title>
            <Paragraph>{customer.customer_phone_number}</Paragraph>
            <Paragraph>{customer.customer_imei_number}</Paragraph>
          </Card.Content>

          <Card.Actions>
            <Button onPress={() =>navigation.navigate('customer', {id: customer.id})}>Edit</Button>
            <Button onPress={() => removeCustomer(customer.id)}>Remove</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={value}
        renderItem={({item}) => renderList(item)}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadCustomer} />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default ListCustomer;
