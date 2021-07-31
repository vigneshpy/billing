import React from "react";
import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";
import AppHeader from "../Header/AppHeader";
import CustomerScreen from "./CustomerScreen";
import MobileScreen from "./MobileScreen";
import MobileModelScreen from "./MobileModelScreen";
import ItemScreen from "./ItemScreen";
import ServiceScreen from "./ServiceScreen";
import ReportScreen from "./ReportScreen";
import HomeScreen  from "./HomeScreen"
 const AppStack = createStackNavigator();
const Screens = ({ navigation }) => {
  const headerOptions = {
    header: ({ scene, navigation }:any) => {
      const { options } = scene.descriptor;
      return (
        <AppHeader HeaderTitle={options.title} navigationProps={navigation} />
      );
    },
    headerMode: "screen",
    headerShown: "false",
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
  };
  return (
    <AppStack.Navigator screenOptions={headerOptions}>
      
      <AppStack.Screen
        name="home"
        options={{ title: "Home" }}
        component={HomeScreen}
      />
      <AppStack.Screen
        name="mobile"
        options={{ title: "Mobile" }}
        component={MobileScreen}
      />
      <AppStack.Screen
        name="mobile_model"
        options={{ title: "Mobile Model" }}
        component={MobileModelScreen}
      />
       <AppStack.Screen
        name="item"
        options={{ title: "Item" }}
        component={ItemScreen}
      />
      <AppStack.Screen
        name="service"
        options={{ title: "service" }}
        component={ServiceScreen}
      />
     <AppStack.Screen
        name="customer"
        options={{ title: "customer" }}
        component={CustomerScreen}
      />
       <AppStack.Screen
        name="report"
        options={{ title: "report" }}
        component={ReportScreen}
      />

    
    </AppStack.Navigator>
  );
};
export default Screens;