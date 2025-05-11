import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";

const App = () => {
  return (
    <View>
      <Text>App 1</Text>
      <Slider
        minimumValue={0}
        maximumValue={1}
        style={{ height: 40, width: 300 }}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
