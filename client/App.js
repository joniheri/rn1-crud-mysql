import React from "react";
// import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
// Screen
import Home from "./src/pages/Home";
import AddTodo from "./src/pages/AddTodo";
import DetailTodo from "./src/pages/DetailTodo";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 3,
          },
          cardStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add Todo" component={AddTodo} />
        <Stack.Screen name="Detail Todo" component={DetailTodo} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;
