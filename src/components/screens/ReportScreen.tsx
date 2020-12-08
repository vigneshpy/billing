import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import StackNavWrapper from '../navigation/stackNavWrapper';
import navigate from '../navigation/navigationService';
import {View, Text,Button} from 'react-native';

const ReportScreen = ({navigation}) => {
  const home = () => {
    return (
      <View >
        <Text>Report</Text>
      </View>
    );
  };
  return <StackNavWrapper component={home} name="Report" />;
};

export default ReportScreen;
