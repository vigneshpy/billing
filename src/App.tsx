import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NavTab from "./components/navigation/navigationTab";
import Toast from 'react-native-toast-message';
const Tabs = createMaterialBottomTabNavigator();


const App = () => {
  
  return (
    <NavigationContainer>
      <NavTab />
      
      <Toast ref={(ref) => Toast.setRef(ref)} />
     </NavigationContainer>
  );
};

export default App;
