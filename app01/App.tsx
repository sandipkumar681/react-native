//SafeAreaView is not working

import { JSX } from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = (): JSX.Element => {
  console.log("Hi");
  const isDarkMode = useColorScheme() === "dark";
  return (
    <SafeAreaProvider>
      {/* <SafeAreaView> */}
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
          Hello, Sandip!
        </Text>
      </View>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  paddingLeft: { paddingLeft: "3%" },
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  whiteText: { color: "#FFFFFF" },
  blackText: { color: "#000000" },
});
