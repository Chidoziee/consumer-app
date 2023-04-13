import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { AppRegistry } from "react-native";
import { ThemeProvider } from "styled-components/native";
//import { ApolloProvider } from "@apollo/client";

import { name as appName } from "./app.json";
import { theme } from "./src/infrastructure/theme";
import { View, Text } from "react-native";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from "@expo-google-fonts/open-sans";
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  // /***** configure fonts *****/
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
