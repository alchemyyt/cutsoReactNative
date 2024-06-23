import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import HomeScreen from "../screens/HomeScreen.jsx";
import SettingsScreen from "../screens/SettingsScreen.jsx";

const Tab = createBottomTabNavigator();
const NavigationTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default NavigationTab;
