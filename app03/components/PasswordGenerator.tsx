import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { JSX, useCallback, useEffect, useState } from "react";
import Clipboard from "@react-native-clipboard/clipboard";

type Props = { isDarkMode: boolean };

const PasswordGenerator = ({ isDarkMode }: Props): JSX.Element => {
  const [isLowerCaseEnabled, setIsLowerCaseEnabled] = useState(false);
  const [isUpperCaseEnabled, setIsUpperCaseEnabled] = useState(false);
  const [isNumberEnabled, setIsNumberEnabled] = useState(true);
  const [isSymbolsEnabled, setIsSymbolsEnabled] = useState(false);
  const [lengthOfString, setLengthOfString] = useState(8);
  const [myString, setMyString] = useState("");
  const [message, setMessage] = useState("");
  const [isUserInputValid, setisUserInputValid] = useState(true);

  const toggleLowerCaseSwitch = () => {
    setIsLowerCaseEnabled((prev) => !prev);
  };
  const toggleUpperCaseSwitch = () => {
    setIsUpperCaseEnabled((prev) => !prev);
  };
  const toggleNumberSwitch = () => {
    setIsNumberEnabled((prev) => !prev);
  };
  const toggleSymbolsSwitch = () => {
    setIsSymbolsEnabled((prev) => !prev);
  };
  const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "1234567890";
  const symbols = "!@#$%^&*(){}[]|";
  const generatorStringFunction = () => {
    let generatorString = "";
    if (isLowerCaseEnabled) {
      generatorString += lowerCaseLetter;
    }
    if (isUpperCaseEnabled) {
      generatorString += upperCaseLetter;
    }
    if (isNumberEnabled) {
      generatorString += number;
    }
    if (isSymbolsEnabled) {
      generatorString += symbols;
    }
    return generatorString;
  };

  const randomStringGenerator = useCallback(() => {
    setMessage("");
    if (!isUserInputValid) return;
    if (
      !(
        isLowerCaseEnabled ||
        isUpperCaseEnabled ||
        isNumberEnabled ||
        isSymbolsEnabled
      )
    ) {
      setMessage("Please choose atleast one option!");
      return;
    }
    let i = 0;
    const generatorString = generatorStringFunction();
    let generatedString = "";
    while (i < lengthOfString) {
      const randomNumber = Math.floor(Math.random() * generatorString.length);
      generatedString += generatorString[randomNumber];

      i++;
    }
    setMyString(generatedString);
  }, [
    lengthOfString,
    isLowerCaseEnabled,
    isUpperCaseEnabled,
    isNumberEnabled,
    isSymbolsEnabled,
  ]);
  useEffect(() => {
    if (isUserInputValid) {
      randomStringGenerator();
    }

    return () => {
      setMyString("");
    };
  }, [randomStringGenerator, isUserInputValid]);

  return (
    <View>
      <Text
        style={[
          isDarkMode ? styles.whiteText : styles.blackText,
          styles.highlightText,
        ]}
      >
        Password Generator
      </Text>

      <View style={styles.basicFieldContainer}>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
          Choose Length of Password
        </Text>
        <TextInput
          keyboardType="numeric"
          value={String(lengthOfString)}
          onChangeText={(text) => {
            const num = Number(text);
            if (!isNaN(num)) {
              if (num < 4) {
                setisUserInputValid(false);
                setMessage("Input should not be less than 4");
                setLengthOfString(num);
              } else if (num > 100) {
                setisUserInputValid(false);
                setMessage("Input should not exceed than 100");
                setLengthOfString(num);
              } else {
                setisUserInputValid(true);
                setMessage("");
                setLengthOfString(num);
              }
            }
          }}
          style={[
            styles.input,
            isDarkMode
              ? [styles.whiteBg, styles.blackText]
              : [styles.darkBg, styles.whiteText],
          ]}
        />
      </View>
      <View>
        <View style={[styles.basicFieldContainer]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            Include LowerCase Letter
          </Text>
          <Switch
            value={isLowerCaseEnabled}
            onValueChange={toggleLowerCaseSwitch}
          />
        </View>
        <View style={[styles.basicFieldContainer]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            Include UpperCase Letter
          </Text>
          <Switch
            value={isUpperCaseEnabled}
            onValueChange={toggleUpperCaseSwitch}
          />
        </View>
        <View style={[styles.basicFieldContainer]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            Include Number
          </Text>
          <Switch value={isNumberEnabled} onValueChange={toggleNumberSwitch} />
        </View>
        <View style={[styles.basicFieldContainer]}>
          <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
            Include Symbols
          </Text>
          <Switch
            value={isSymbolsEnabled}
            onValueChange={toggleSymbolsSwitch}
          />
        </View>
      </View>

      {message && (
        <Text
          style={[
            isDarkMode ? styles.whiteText : styles.blackText,
            styles.message,
          ]}
        >
          {message}
        </Text>
      )}

      {myString && (
        <View style={styles.passwordContainer}>
          <View style={styles.passwordField}>
            <Text
              selectable
              style={[
                isDarkMode ? styles.whiteText : styles.blackText,
                styles.passwordText,
              ]}
            >
              {myString}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              Clipboard.setString(myString);
            }}
            style={styles.copyButton}
          >
            <Text style={styles.copyButtonText}>Copy</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.regenerateAndResetContainer}>
        {isUserInputValid && !message && (
          <TouchableOpacity
            onPress={() => randomStringGenerator()}
            style={styles.regenerateButton}
          >
            <Text style={styles.regenerateButtonText}>Regenerate</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => {
            setLengthOfString(8);
            setIsLowerCaseEnabled(false);
            setIsUpperCaseEnabled(false);
            setIsNumberEnabled(true);
            setIsSymbolsEnabled(false);
            setMessage("");
            setisUserInputValid(true);
          }}
          style={styles.resetButton}
        >
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { marginVertical: 2 },
  highlightText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 2,
  },
  whiteText: { color: "#FFFFFF" },
  blackText: { color: "#000000" },
  basicFieldContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
    marginHorizontal: 2,
    paddingHorizontal: 16,
  },
  message: { color: "red", textAlign: "center" },
  input: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    width: 50,
    borderRadius: 6,
    textAlign: "center",
  },
  whiteBg: { backgroundColor: "#FFFFFF" },
  darkBg: { backgroundColor: "#000000" },

  passwordContainer: {
    marginVertical: 12,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  copyButton: {
    backgroundColor: "#9cdcfe",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  copyButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },

  passwordText: {
    fontSize: 16,
    fontWeight: "600",
  },

  passwordField: {
    paddingVertical: 8,
    width: 200,
  },
  resetButton: {
    backgroundColor: "#ff4d4d",
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    alignSelf: "center",
  },
  resetButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  regenerateButton: {
    backgroundColor: "#6fcf97",
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    alignSelf: "center",
    marginVertical: 5,
  },
  regenerateButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  regenerateAndResetContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
    gap: 8,
  },
});

export default PasswordGenerator;
