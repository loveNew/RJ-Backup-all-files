import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class ReciptScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Recipt</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});