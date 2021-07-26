import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../Screens/HomeScreen';
import ServiceScreen from '../Screens/ServiceTabScreen';
import ReportScreen from '../Screens/ReportScreen';
import CustomerScreen from '../Screens/CustomerTabScreen';
import styles from '../config/styles';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tabs = createMaterialBottomTabNavigator();

const AppStyle = styles.color;

const NavTabBottom = () => {
  return (
    <Tabs.Navigator
      backBehavior="history"
      shifting={false}
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: AppStyle.COLOR_PRIMARY}}>
      <Tabs.Screen
        name="Items"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={20} />,
        }}
      />
      <Tabs.Screen
        name="CustomerScreen"
        component={CustomerScreen}
        options={{
          tabBarLabel: 'Customer',
          tabBarIcon: ({color}) => (
            <Icon name="user-circle-o" color={color} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="Service"
        component={ServiceScreen}
        options={{
          tabBarLabel: 'Service',
          tabBarIcon: ({color, size}) => (
            <Icon name="server" color={color} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="Report"
        component={ReportScreen}
        options={{
          tabBarLabel: 'Reports',
          tabBarIcon: ({color}) => (
            <Icon name="area-chart" color={color} size={20} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default NavTabBottom;
