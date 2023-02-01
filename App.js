import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import StateWithFunctionalComponent from "./StateWithFuctionalComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <StateWithFunctionalComponent />
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
