import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EntryScreen from "./screens/Entry";
import HomeScreen from "./screens/Home";
import IssueScreen from "./screens/Issue";
import ReciptScreen from "./screens/Recipt";
import ReciptListScreen from "./screens/ReciptList";
import ReturnScreen from "./screens/Return";
import TodayRateScreen from "./screens/TodayRate";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Entry"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Entry" component={EntryScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Issue" component={IssueScreen} />
        <Stack.Screen name="Recipt" component={ReciptScreen} />
        <Stack.Screen name="ReciptList" component={ReciptListScreen} />
        <Stack.Screen name="Return" component={ReturnScreen} />
        <Stack.Screen name="TodayRate" component={TodayRateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
