import { Button, StyleSheet, Text, useColorScheme, View } from "react-native";

//Navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: HomeProps) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View
      style={[styles.container, isDarkMode ? styles.darkBg : styles.whiteBg]}
    >
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("Details", { productId: "8688" });
        }}
      ></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  whiteText: { color: "#FFFFFF" },
  blackText: { color: "#000000" },
  whiteBg: { backgroundColor: "#FFFFFF" },
  darkBg: { backgroundColor: "#000000" },
});
