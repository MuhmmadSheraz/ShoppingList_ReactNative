import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import { InputBar } from "./Components/InputBar";
import ShoppingList from "./Components/ShoppingList";
export default function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const addShoppingList = (text) => {
    let shopObj = {
      id: Math.floor(Math.random() * 100),
      title: text,
    };
    setShoppingList((pre) => {
      return [shopObj, ...pre];
    });
  };
  const deleteItem = (id) => {
    setShoppingList((pre) => {
      return pre.filter(x=>x.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <InputBar action={addShoppingList} />
      <ShoppingList listHere={shoppingList} deleteAction={deleteItem} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 50,
  },
  buttons: {
    margin: 10,
  },
  para: {
    color: "black",
    paddingBottom: 20,
    fontSize: 33,
  },
});
