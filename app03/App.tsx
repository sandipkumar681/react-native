import { ScrollView, StyleSheet, useColorScheme } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PasswordGenerator from "./components/PasswordGenerator";
import { JSX } from "react";

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <SafeAreaProvider
      style={[
        isDarkMode ? styles.darkBg : styles.whiteBg,
        styles.basicContainer,
      ]}
    >
      <SafeAreaView>
        <ScrollView>
          <PasswordGenerator isDarkMode={isDarkMode} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  basicContainer: { paddingVertical: 2, paddingHorizontal: 2 },
  whiteBg: { backgroundColor: "#FFFFFF" },
  darkBg: { backgroundColor: "#000000" },
});
