import service from './ServiceScreen';
import list from '../list/serviceList';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import  StackNavWrapper from "../navigation/stackNavWrapper";
const TopTaps = createMaterialTopTabNavigator();

const ServiceScreenTab = () => {
 
  return (
    <TopTaps.Navigator
      initialRouteName="servicelist"
      tabBarPosition="top"
      tabBarOptions={{pressColor: '#78C3FB'}}>
      <TopTaps.Screen
        name="service"
        component={list}
        options={{tabBarLabel: 'Service List'}}
      />
      <TopTaps.Screen
        name="servicelist"
        component={service}
        options={{tabBarLabel: 'Service'}}
      />
    </TopTaps.Navigator>
  );

  
};


const ServiceScreenStack=()=>{
  return <StackNavWrapper component={ServiceScreenTab} name="Service" />;
  }
  export default ServiceScreenStack;
  