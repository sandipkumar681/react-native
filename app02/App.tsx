import { View, ScrollView, StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import FlatCards from "./components/FlatCards";
import { JSX } from "react";
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView style={isDarkMode ? styles.darkBg : styles.whiteBg}>
          <View style={styles.basicPadding}>
            <FlatCards isDarkMode={isDarkMode} />
            <ElevatedCards isDarkMode={isDarkMode} />
            <FancyCard isDarkMode={isDarkMode} />
            <ActionCard isDarkMode={isDarkMode} />
            <ContactList isDarkMode={isDarkMode} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  basicPadding: { paddingHorizontal: 5, paddingVertical: 5 },
  whiteBg: { backgroundColor: "#FFFFFF" },
  darkBg: { backgroundColor: "#000000" },
});
