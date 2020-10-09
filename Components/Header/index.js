import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default Header = () => {
  return (
    <View>
      <Text style={styles.header}> Shopping List</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    fontSize: 34,
    fontWeight: "bold",
  },
});
