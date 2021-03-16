import customer from './CustomerScreen';
import list from '../list/customerList';
import React from 'react';
import  StackNavWrapper from "../navigation/stackNavWrapper";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const TopTaps = createMaterialTopTabNavigator();

const CustomerScreen = () => {
  return (
    <TopTaps.Navigator
      initialRouteName="customerlist"
      tabBarPosition="top"
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
}
const CustomerScreenStack=()=>{
return <StackNavWrapper component={CustomerScreen} name="Customer" />;
}
export default CustomerScreenStack;
