import React, { useCallback, useEffect, useState } from "react";
import { Animated, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "./src/screen/SignIn";
import { NativeBaseProvider } from "native-base";
import Home from "./src/screen/Home";
import Maps from "./src/screen/Maps";
import News from "./src/screen/News";
import Challenges from "./src/screen/Challenges";
import { Feather, Ionicons } from "@expo/vector-icons";
import List_collection from "./src/screen/List_collection";
import Collect from "./src/screen/Collect";
import Done from "./src/screen/Done";
import DetailNews from "./src/screen/DetailNews";
import ChangeCoin from "./src/screen/ChangeCoin";
import CodeGift from "./src/screen/CodeGift";
import CartGift from "./src/screen/CartGift";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#13A49E",
        tabBarInactiveTintColor: "grey",
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopColor: "rgba(0, 0, 0, .2)",
          height: 88,
          shadowOpacity: 0.25
        },

        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Maps") {
            iconName = focused ? "ios-location" : "ios-location-outline";
          } else if (route.name === "News") {
            iconName = focused ? "reader" : "reader-outline";
          } else if (route.name === "Challenges") {
            iconName = focused ? "trophy-sharp" : "trophy-outline";
          }

          return <Ionicons name={iconName} size={23} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Challenges" component={Challenges} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Collection" component={List_collection} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Collect" component={Collect} />
        <Stack.Screen name="Done" component={Done} />
        <Stack.Screen name="Detail" component={DetailNews} />
        <Stack.Screen name="ChangeCoin" component={ChangeCoin} />
        <Stack.Screen name="CodeGift" component={CodeGift} />
        <Stack.Screen name="CartGift" component={CartGift} />
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
      </Stack.Navigator>
    </>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
