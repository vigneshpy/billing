import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import StackNavWrapper from '../navigation/stackNavWrapper';
import {View, Text} from 'react-native';

const HomeScreen = () => {
  const home = () => {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  };
  return <StackNavWrapper component={home} name="Home" />;
};

export default HomeScreen;
