import service from './ServiceScreen';
import list from '../list/serviceList';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TopTaps = createMaterialTopTabNavigator();


const ServiceScreen = () => {
    return (
      <TopTaps.Navigator  initialRouteName="servicelist" tabBarPosition='bottom' tabBarOptions={{pressColor:'#78C3FB'} }>
    <TopTaps.Screen name="service" component={list} options={{ tabBarLabel: 'Service List' }} />
<TopTaps.Screen name="servicelist" component={service} options={{ tabBarLabel: 'Service' }} />
 
      </TopTaps.Navigator>
    );
  } 

export default ServiceScreen;