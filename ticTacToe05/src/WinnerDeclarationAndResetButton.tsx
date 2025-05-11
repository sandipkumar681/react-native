import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { JSX } from "react";

type Props = {
  isWinnerDeclared: boolean;
  isFirstPlayerWinner: boolean;
  handleReset: () => void;
};

const WinnerDeclarationAndResetButton = ({
  isWinnerDeclared,
  isFirstPlayerWinner,
  handleReset,
}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      {isWinnerDeclared && (
        <Text style={styles.winnerText}>
          {isFirstPlayerWinner ? "🎉 Player 1 Wins!" : "🎉 Player 2 Wins!"}
        </Text>
      )}

      <Pressable style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset Game</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  winnerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: "#f14c4c",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  resetButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WinnerDeclarationAndResetButton;
