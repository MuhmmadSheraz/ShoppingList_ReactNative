import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const InputBar = ({ action }) => {
  const [userInput, setUserInput] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Enter Shopping Item"
        style={styles.input}
        onChangeText={(text) => setUserInput(text)}
      />
      <View style={styles.addBTN}>
        <Button title="Add Item" onPress={() => action(userInput)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 2,
    width: 300,
    height: 60,
    marginTop: 20,
    padding: 10,
    fontSize: 19,
    marginBottom: 20,
  },
  addBTN: {
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
});
