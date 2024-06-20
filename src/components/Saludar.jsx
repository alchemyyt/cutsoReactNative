import React from "react";
import { View, Text } from "react-native";
const Saludar = (props) => {
  const { firstName, lastName } = props;
  return (
    <View>
      <Text>{`Hola ${firstName} ${lastName}`}</Text>
    </View>
  );
};

export default Saludar;
Saludar.defaultProps = {
  firstName: "jose",
  lastName: "miguel",
};
