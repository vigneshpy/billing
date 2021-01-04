import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import StackNavWrapper from '../navigation/stackNavWrapper';
import navigate from '../navigation/navigationService';

import {View, Text,Button} from 'react-native';

const ListCustomer = ({navigation}) => {
  const ListCustomer = () => {
    return (
      <View >
        <Text>List Customer</Text>
      </View>
    );
  };
  return <StackNavWrapper component={ListCustomer} name="ListCustomer" />;
};

export default ListCustomer;
