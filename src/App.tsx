import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NavTab from "./components/navigation/NavigationTab";
import Toast from 'react-native-toast-message';
 import CustomDrawer from "./components/Drawer/Drawer";
import {StatusBar} from 'react-native';
const Tabs = createMaterialBottomTabNavigator();


const App = () => {
  
  return (
    <NavigationContainer>
      <StatusBar />
      <CustomDrawer />
      <Toast ref={(ref) => Toast.setRef(ref)} />
     </NavigationContainer>
  );
};

export default App;
