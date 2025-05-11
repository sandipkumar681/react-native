import { JSX } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = { isDarkMode: boolean; isFirstPlayerTurn: boolean };

const PlayerTurn = ({ isFirstPlayerTurn }: Props): JSX.Element => {
  return (
    <View style={[styles.playerTurnContainer, styles.backGroundColor]}>
      {
        <Text style={[styles.text, styles.whiteText]}>
          Player {isFirstPlayerTurn ? 1 : 2}'s turn
        </Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  playerTurnContainer: {
    height: 70,
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  text: { textAlign: "center", fontWeight: "bold", fontSize: 20 },
  whiteText: { color: "#FFFFFF" },
  blackText: { color: "#000000" },
  backGroundColor: { backgroundColor: "#f7c628" },
});

export default PlayerTurn;
