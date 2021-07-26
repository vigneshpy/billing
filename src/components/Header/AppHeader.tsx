import React from "react";
import { Appbar } from "react-native-paper";
import { StatusBar, View } from "react-native";
 import { StyleSheet } from "react-native";

 const style = StyleSheet.create({
    header: {
      height: 50,
      marginTop: 5,
      backgroundColor: "#6200EE",
    },
  });
  
const AppHeader = (props: any) => {
  const primaryColor = style.header.backgroundColor;

  const toggleBtn = <Appbar.Action icon="menu" onPress={() => props.navigationProps.toggleDrawer()}
    />
  
  const backBtn = <Appbar.BackAction onPress={() => props.navigationProps.goBack()} />
  
  const headerButton = props.navigationProps.canGoBack() ? backBtn : toggleBtn;
  return (
    <View>
      <Appbar.Header style={style.header}>
        {headerButton}
        <Appbar.Content title={props.HeaderTitle} />
      </Appbar.Header>
      <StatusBar backgroundColor={primaryColor} />
    </View>
  );
};

export default AppHeader;