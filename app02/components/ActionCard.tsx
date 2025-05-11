import { JSX } from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";

type Props = {
  isDarkMode: boolean;
};

const ActionCard = ({ isDarkMode }: Props): JSX.Element => {
  const openWebsite = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.card}>
      <Text
        style={[
          styles.highlightText,
          isDarkMode ? styles.whiteText : styles.blackText,
        ]}
      >
        My Projects
      </Text>
      <Text
        style={[
          styles.explainText,
          isDarkMode ? styles.whiteText : styles.blackText,
        ]}
      >
        Building cool stuff with the MERN stack — check out my projects below!
      </Text>
      <View style={styles.projectContainer}>
        <View style={styles.project}>
          <TouchableOpacity
            style={[
              styles.project,
              isDarkMode ? styles.projectDark : styles.projectLight,
            ]}
            onPress={() => openWebsite("https://streamioplayer.netlify.app")}
          >
            <Text
              style={[
                isDarkMode ? styles.whiteText : styles.blackText,
                styles.projectText,
              ]}
            >
              Streamio 🎬
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.project}>
          <TouchableOpacity
            style={[
              styles.project,
              isDarkMode ? styles.projectDark : styles.projectLight,
            ]}
            onPress={() => openWebsite("https://nimbus-notes.netlify.app")}
          >
            <Text
              style={[
                isDarkMode ? styles.whiteText : styles.blackText,
                styles.projectText,
              ]}
            >
              Nimbus Notes 📝
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { marginVertical: 2 },
  highlightText: { fontSize: 24, fontWeight: "bold" },
  whiteText: { color: "#FFFFFF" },
  blackText: { color: "#000000" },
  explainText: {
    fontSize: 16,
    textAlign: "justify",
    fontWeight: "400",
    marginVertical: 3,
  },
  projectContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 12,
  },
  project: {
    padding: 12,
    borderRadius: 10,
    minWidth: 130,
    alignItems: "center",
    // elevation: 3,
  },
  projectLight: {
    backgroundColor: "#e0e0e0",
  },
  projectDark: {
    backgroundColor: "#333333",
  },
  projectText: { fontSize: 16, fontWeight: "500" },
});

export default ActionCard;
