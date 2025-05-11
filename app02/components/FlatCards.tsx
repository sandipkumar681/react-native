import { StyleSheet, Text, View } from "react-native";
import { JSX } from "react";

type Props = {
  isDarkMode: boolean;
};

const FlatCards = ({ isDarkMode }: Props): JSX.Element => {
  return (
    <View>
      <Text
        style={[
          styles.highlightText,
          isDarkMode ? styles.whiteText : styles.blackText,
        ]}
      >
        FlatCards
      </Text>
      <View style={styles.cardContainer}>
        <View style={[styles.container, styles.cardOne]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            RED
          </Text>
        </View>
        <View style={[styles.container, styles.cardTwo]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            GREEN
          </Text>
        </View>
        <View style={[styles.container, styles.cardThree]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            BLUE
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  highlightText: { fontSize: 24, fontWeight: "bold" },
  whiteText: { color: "#FFFFFF" },
  blackText: { color: "#000000" },
  container: {
    height: 100,
    width: 100,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  cardOne: { backgroundColor: "#EF5354" },
  cardTwo: { backgroundColor: "#50DBB4" },
  cardThree: { backgroundColor: "#5DA3FA" },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

export default FlatCards;
