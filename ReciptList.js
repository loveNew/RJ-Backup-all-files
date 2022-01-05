import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class ReciptListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Recipt List</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
