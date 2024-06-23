import React from "react";
import { View, Text } from "react-native";
import propTypes from "prop-types";

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
};
Saludar.propTypes = {
  firstName: propTypes.string.isRequired, //obligatorio
  lastName: propTypes.string, //opcional
};
