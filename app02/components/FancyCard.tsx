import { Image, StyleSheet, Text, View } from "react-native";
import { JSX } from "react";

type Props = {
  isDarkMode: boolean;
};

const FancyCard = ({ isDarkMode }: Props): JSX.Element => {
  return (
    <View>
      <Text
        style={[
          styles.highlightText,
          isDarkMode ? styles.whiteText : styles.blackText,
        ]}
      >
        FancyCard
      </Text>
      <View style={styles.cardElevated}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://images.pexels.com/photos/19149591/pexels-photo-19149591/free-photo-of-hawa-mahal-in-jaipur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          ></Image>
        </View>
        <View style={styles.cardBody}>
          <Text
            style={[
              styles.cardTitle,
              isDarkMode ? styles.whiteText : styles.blackText,
            ]}
          >
            Hawa Mahal
          </Text>
          <Text
            style={[
              styles.cardLabel,
              isDarkMode ? styles.whiteText : styles.blackText,
            ]}
          >
            Jaipur, Rajasthan, India
          </Text>
          <Text
            style={[
              styles.cardDescription,
              isDarkMode ? styles.whiteText : styles.blackText,
            ]}
          >
            Hawa Mahal is known as the “palace of winds“. Maharaja Sawai Pratap
            Singh built it palace in 1799. Hawa Mahal is considered to be unique
            as it has many small windows and balconies that seem like a
            honeycomb.
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
  image: {
    height: 180,
    width: 330,
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 8,
  },
  imageContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  cardTitle: { fontSize: 20, textAlign: "center", fontWeight: "bold" },
  cardLabel: { fontSize: 16, textAlign: "center" },
  cardDescription: { textAlign: "justify" },
  cardBody: { margin: 8, flex: 1, flexGrow: 1 },
  cardElevated: { elevation: 40, shadowOffset: { height: 1, width: 1 } },
});

export default FancyCard;
