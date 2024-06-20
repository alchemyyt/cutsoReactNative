import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LoginForm.jsx";
import Saludar from "./src/components/Saludar.jsx";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>holiwi uwi</Text>
      <LoginForm />
      <Saludar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
