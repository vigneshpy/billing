import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import StackNavWrapper from '../navigation/stackNavWrapper';

import {View, Text,Button} from 'react-native';

const ListServiceScreen = ({navigation}) => {
  const ListService = () => {
    return (
      <View >
        <Text>List Service</Text>
      </View>
    );
  };
  return <StackNavWrapper component={ListService} name="ListService" />;
};

export default ListServiceScreen;