import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PlayerTurn from "./PlayerTurn";
import { JSX, useEffect, useState } from "react";
import WinnerDeclarationAndResetButton from "./WinnerDeclarationAndResetButton";
import GridIcons from "./GridIcons";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const [isFirstPlayerTurn, setIsFirstPlayerTurn] = useState(true);
  const [isWinnerDeclared, setIsWinnerDeclared] = useState(false);
  const [isFirstPlayerWinner, setIsFirstPlayerWinner] = useState(false);
  const initialState = [
    [
      {
        index: 0,
        isChanged: false,
        isFirstPlayerChanged: false,
        isSecondPlayerChanged: false,
      },
      {
        index: 1,
        isChanged: false,
        isFirstPlayerChanged: false,
        isSecondPlayerChanged: false,
      },
      {
        index: 2,
        isChanged: false,
        isFirstPlayerChanged: false,
        isSecondPlayerChanged: false,
      },
    ],
    [
      {
        index: 0,
        isChanged: false,
        isFirstPlayerChanged: false,
        isSecondPlayerChanged: false,
      },
      {
        index: 1,
        isChanged: false,
        isFirstPlayerChanged: false,
        isSecondPlayerChanged: false,
      },
      {
        index: 2,
        isChanged: false,
        isFirstPlayerChanged: false,
        isSecondPlayerChanged: false,
      },
    ],
    [
      {
        index: 0,
        isChanged: false,
        isFirstPlayerChanged: false,
        isSecondPlayerChanged: false,
      },
      {
        index: 1,
        isChanged: false,
        isFirstPlayerChanged: false,
        isSecondPlayerChanged: false,
      },
      {
        index: 2,
        isChanged: false,
        isFirstPlayerChanged: false,
        isSecondPlayerChanged: false,
      },
    ],
  ];
  const [stateOfColumns, setStateOfColumns] = useState(initialState);

  const handlePress = (rowIndex, colIndex) => {
    setStateOfColumns((prev) => {
      const newObj = prev[rowIndex].filter((field) => field.index === colIndex);

      const updatedCell = {
        ...newObj[0],
        isChanged: true,
        isFirstPlayerChanged: isFirstPlayerTurn,
        isSecondPlayerChanged: !isFirstPlayerTurn,
      };

      const newRow = prev[rowIndex].map((cell) =>
        cell.index === colIndex ? updatedCell : cell
      );

      const updatedstateOfColumns = prev.map((row, i) =>
        i === rowIndex ? newRow : row
      );

      return updatedstateOfColumns;
    });
    setIsFirstPlayerTurn((prev) => !prev);
  };

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (
        stateOfColumns[i][0].isFirstPlayerChanged &&
        stateOfColumns[i][1].isFirstPlayerChanged &&
        stateOfColumns[i][2].isFirstPlayerChanged &&
        true
      ) {
        setIsWinnerDeclared(true);
        setIsFirstPlayerWinner(true);
        return;
      }
      if (
        stateOfColumns[i][0].isSecondPlayerChanged &&
        stateOfColumns[i][1].isSecondPlayerChanged &&
        stateOfColumns[i][2].isSecondPlayerChanged &&
        true
      ) {
        setIsWinnerDeclared(true);
        setIsFirstPlayerWinner(false);
        return;
      }
      if (
        stateOfColumns[0][i].isFirstPlayerChanged &&
        stateOfColumns[1][i].isFirstPlayerChanged &&
        stateOfColumns[2][i].isFirstPlayerChanged &&
        true
      ) {
        setIsWinnerDeclared(true);
        setIsFirstPlayerWinner(true);
        return;
      }
      if (
        stateOfColumns[0][i].isSecondPlayerChanged &&
        stateOfColumns[1][i].isSecondPlayerChanged &&
        stateOfColumns[2][i].isSecondPlayerChanged &&
        true
      ) {
        setIsWinnerDeclared(true);
        setIsFirstPlayerWinner(false);
        return;
      }
    }

    if (
      (stateOfColumns[0][0].isFirstPlayerChanged &&
        stateOfColumns[1][1].isFirstPlayerChanged &&
        stateOfColumns[2][2].isFirstPlayerChanged) ||
      (stateOfColumns[0][2].isFirstPlayerChanged &&
        stateOfColumns[1][1].isFirstPlayerChanged &&
        stateOfColumns[2][0].isFirstPlayerChanged)
    ) {
      setIsWinnerDeclared(true);
      setIsFirstPlayerWinner(true);
      return;
    }

    if (
      (stateOfColumns[0][0].isSecondPlayerChanged &&
        stateOfColumns[1][1].isSecondPlayerChanged &&
        stateOfColumns[2][2].isSecondPlayerChanged) ||
      (stateOfColumns[0][2].isSecondPlayerChanged &&
        stateOfColumns[1][1].isSecondPlayerChanged &&
        stateOfColumns[2][0].isSecondPlayerChanged)
    ) {
      setIsWinnerDeclared(true);
      setIsFirstPlayerWinner(false);
      return;
    }
  };

  const handleReset = () => {
    setIsFirstPlayerTurn(true);
    setIsWinnerDeclared(false);
    setIsFirstPlayerWinner(false);
    setStateOfColumns(initialState);
  };
  useEffect(() => {
    checkWinner();
  }, [stateOfColumns]);

  return (
    <SafeAreaProvider style={[isDarkMode ? styles.darkBg : styles.whiteBg]}>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <PlayerTurn isFirstPlayerTurn={isFirstPlayerTurn} />
          <GridIcons
            handlePress={handlePress}
            stateOfColumns={stateOfColumns}
            isWinnerDeclared={isWinnerDeclared}
          />
          <WinnerDeclarationAndResetButton
            isFirstPlayerWinner={isFirstPlayerWinner}
            isWinnerDeclared={isWinnerDeclared}
            handleReset={handleReset}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  whiteBg: { backgroundColor: "#FFFFFF" },
  darkBg: { backgroundColor: "#000000" },
  container: {
    marginVertical: 5,
    marginHorizontal: 5,
  },
});

export default App;
