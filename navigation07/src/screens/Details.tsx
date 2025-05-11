import { Button, StyleSheet, Text, useColorScheme, View } from "react-native";

//Navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;

const Details = ({ route }: DetailsProps) => {
  const isDarkMode = useColorScheme() === "dark";
  const { productId } = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={[styles.container, isDarkMode ? styles.darkBg : styles.whiteBg]}
    >
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        Details: {productId}
      </Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      ></Button>

      <Button
        title="Go to first screen"
        onPress={() => {
          navigation.popToTop();
        }}
      ></Button>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  whiteText: { color: "#FFFFFF" },
  blackText: { color: "#000000" },
  whiteBg: { backgroundColor: "#FFFFFF" },
  darkBg: { backgroundColor: "#000000" },
});
