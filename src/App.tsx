import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NavTab from "./components/navigation/navigationTab";
const Tabs = createMaterialBottomTabNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <NavTab />
     </NavigationContainer>
  );
};

export default App;
