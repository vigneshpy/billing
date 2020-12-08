import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import styles from "../config/styles";
const Stack = createStackNavigator();
const colors=styles.color;
const headerOptions={
  headerStyle: {
    backgroundColor: colors.COLOR_PRIMARY,
  },
  headerTintColor: colors.COLOR_WHITE,
  headerTitleStyle: {
    
  },
}

const stackNavWrapper = (props) => {

  const options=props.options ? props.options:headerOptions;
  return (
    <Stack.Navigator>
    <Stack.Screen name={props.name} component={props.name} {...props} options={options} />
    </Stack.Navigator>
  );
};

export default stackNavWrapper;