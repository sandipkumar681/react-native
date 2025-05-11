import { JSX, PropsWithChildren, useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  Vibration,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import DiceOne from "../assets/One.png";
import DiceTwo from "../assets/Two.png";
import DiceThree from "../assets/Three.png";
import DiceFour from "../assets/Four.png";
import DiceFive from "../assets/Five.png";
import DiceSix from "../assets/Six.png";

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
  animatedStyle: any;
}>;

const Dice = ({ imageUrl, animatedStyle }: DiceProps): JSX.Element => {
  return (
    <Animated.View style={[styles.diceWrapper, animatedStyle]}>
      <Image style={styles.diceImage} source={imageUrl} />
    </Animated.View>
  );
};

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === "dark";
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const rollDiceOnTap = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }
  };
  useEffect(() => {
    rollDiceOnTap();
  }, []);

  const animatedStyle = {
    transform: [{ scale: scaleAnim }],
  };

  return (
    <SafeAreaProvider style={[isDarkMode ? styles.darkBg : styles.whiteBg]}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Dice imageUrl={diceImage} animatedStyle={animatedStyle} />
            <Pressable
              onPress={() => {
                rollDiceOnTap();
                Vibration.vibrate(150);
              }}
            >
              <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  whiteBg: { backgroundColor: "#FFFFFF" },
  darkBg: { backgroundColor: "#000000" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#FFF2F2",
    height: 700,
  },
  diceWrapper: {
    shadowColor: "#8EA7E9",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 15,
    borderRadius: 20,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#E5E0FF",
    fontSize: 16,
    color: "#8EA7E9",
    fontWeight: "700",
    textTransform: "uppercase",
  },
});

export default App;
