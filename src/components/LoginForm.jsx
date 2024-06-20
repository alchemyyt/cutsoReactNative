import React from "react";
import { TextInput, Button, View, Text } from "react-native";

const LoginForm = () => {
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="email" />
      <TextInput placeholder="password" />
      <Button
        onPress={() => {}}
        title="Enviar"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      ></Button>
    </View>
  );
};

export default LoginForm;
