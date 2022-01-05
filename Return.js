import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class ReturnScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Return </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
