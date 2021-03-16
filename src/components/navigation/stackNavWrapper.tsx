import { useLinkProps } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import styles from "../config/styles";
const Stack = createStackNavigator();
const colors=styles.color;


const stackNavWrapper = (props) => {
  const headerOptions={
    title: props.name, 
    headerStyle: {
      backgroundColor: colors.COLOR_PRIMARY,
    },
    headerTintColor: colors.COLOR_WHITE,
    headerTitleStyle: {
      fontWeight: 'bold',  
    },
  }
  const options=props.options ? props.options:headerOptions;
  return (
    <Stack.Navigator>
    <Stack.Screen name={props.name} component={props.name} {...props} options={options} />
    </Stack.Navigator>
  );
};

export default stackNavWrapper;