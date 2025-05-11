import { JSX } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type Props = {
  isDarkMode: boolean;
};

const ElevatedCards = ({ isDarkMode }: Props): JSX.Element => {
  return (
    <View>
      <Text
        style={[
          styles.highlightText,
          isDarkMode ? styles.whiteText : styles.blackText,
        ]}
      >
        ElevatedCards
      </Text>
      <ScrollView horizontal={true} style={styles.cardContainer}>
        <View style={[styles.container, styles.card]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            Scroll
          </Text>
        </View>
        <View style={[styles.container, styles.card]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            me
          </Text>
        </View>
        <View style={[styles.container, styles.card]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            to
          </Text>
        </View>
        <View style={[styles.container, styles.card]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            see
          </Text>
        </View>
        <View style={[styles.container, styles.card]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            more
          </Text>
        </View>
        <View style={[styles.container, styles.card]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            ...
          </Text>
        </View>
      </ScrollView>
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
  card: { backgroundColor: "#cfc55b" },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    elevation: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: "#EF5354",
  },
});

export default ElevatedCards;
