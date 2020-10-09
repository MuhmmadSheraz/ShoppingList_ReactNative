import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const Item = ({ title, id, deleteAction }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.deleteBtn} onPress={() => deleteAction(id)}>
      X
    </Text>
  </View>
);

const ShoppingList = ({ listHere, deleteAction }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} deleteAction={deleteAction} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listHere}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "lightblue",
    padding: 10,
    marginVertical: 8,
    // marginHorizontal: 16,
    width: 300,
  },
  title: {
    alignSelf: "flex-start",
    color: "black",
    fontSize: 22,
  },
  deleteBtn: {
    alignSelf: "flex-end",
    fontSize: 22,
    color: "red",
  },
});

export default ShoppingList;
