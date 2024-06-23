import React from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";

const SettingsScreen = (props) => {
  const { navigation } = props;
  const goToPage = (pagaName) => {
    navigation.navigate(pagaName);
  };
  return (
    <SafeAreaView>
      <Text>Estamos en settings </Text>
      <Button onPress={() => goToPage("Home")} title="Home" />
      {/*añadir arrow function en onPress para que se ejecute la funcion solo cuando se le da click y no cuando cague el componenete y asi poder poner el parametro de la funcion en este caso "Home" */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;
