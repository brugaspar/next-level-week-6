import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { Rajdhani_500Medium, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";
import { Inter_400Regular, Inter_500Medium, useFonts } from "@expo-google-fonts/inter";

import { Background } from "./src/components/Background";

import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Routes />
    </Background>
  );
}