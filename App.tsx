import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, useColorScheme } from "react-native";
import { Root } from "./src/navigation";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./src/theme/default-theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "light" ? lightTheme : darkTheme;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer
          theme={{
            colors: {
              background: theme.colors.background,
              border: theme.colors.border,
              card: theme.colors.secondary,
              notification: theme.colors.card,
              primary: theme.colors.primary,
              text: theme.colors.text,
            },
            dark: colorScheme === "dark",
          }}
        >
          <StatusBar style={colorScheme ?? "auto"} />
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
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
