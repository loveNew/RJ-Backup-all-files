import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class TodayRateScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Today Rate</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
