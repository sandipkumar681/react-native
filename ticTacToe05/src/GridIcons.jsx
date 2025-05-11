import { JSX } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// type Props = {
//   handlePress: (rowIndex: number, colIndex: number) => void;
//   stateOfColumns: [];
// };

const GridIcons = ({ handlePress, stateOfColumns, isWinnerDeclared }) => {
  return (
    <View style={styles.gridContainer}>
      {stateOfColumns.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.parentContainer}>
          {row.map((col, colIndex) => (
            <Pressable
              key={colIndex}
              style={styles.childText}
              onPress={() => handlePress(rowIndex, colIndex)}
              disabled={col.isChanged || isWinnerDeclared}
            >
              {!col.isChanged ? (
                <Icon name="crop-square" size={28} color="#9E9E9E" />
              ) : col.isFirstPlayerChanged ? (
                <Icon name="close" color="#E53935" size={28} />
              ) : (
                <Icon name="panorama-fish-eye" color="#1E88E5" size={28} />
              )}
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    marginVertical: 10,
  },

  parentContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 3,
    marginVertical: 10,
    marginHorizontal: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  childText: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});

export default GridIcons;
