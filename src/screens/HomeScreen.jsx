import React from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";
//SafeAreaView No se renderiza en el notch del telefono
const HomeScreen = (props) => {
  const { navigation } = props;
  const goToSetting = () => {
    navigation.navigate("Setting");
  };
  return (
    <SafeAreaView>
      <Text>Estamos en homescreen</Text>
      <Button onPress={goToSetting} title="Settings" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
