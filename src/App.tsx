import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NavTab from "./components/navigation/navigationTab";
import SQLite from 'react-native-sqlite-storage';
const Tabs = createMaterialBottomTabNavigator();

global.db = SQLite.openDatabase(
  {
    name: 'billings',
    location: 'default',
    createFromLocation: '~SQLite.db',
  },
  () => {alert('succs')},
  error => {
    console.log("ERROR: " + error);
  }
);
const App = () => {
  
  return (
    <NavigationContainer>
      <NavTab />
     </NavigationContainer>
  );
};

export default App;
