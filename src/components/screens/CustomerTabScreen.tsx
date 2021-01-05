import customer from './CustomerScreen';
import list from '../list/customerList';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const TopTaps = createMaterialTopTabNavigator();

const CustomerScreen = () => {
  return (
    <TopTaps.Navigator
      initialRouteName="customerlist"
      tabBarPosition="bottom"
      tabBarOptions={{pressColor: '#78C3FB'}}>
      <TopTaps.Screen
        name="customerlist"
        component={list}
        options={{tabBarLabel: 'Customer List'}}
      />
      <TopTaps.Screen
        name="customer"
        component={customer}
        options={{tabBarLabel: 'Customer'}}
      />
    </TopTaps.Navigator>
  );
};

export default CustomerScreen;
