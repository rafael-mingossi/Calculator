import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import styles from "./components/styles";
import Buttons from "./components/Buttons";
import Operators from "./components/Operators";

const App = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState("");
  const [strCalculation, setStrCalculation] = useState("0");

  return (
    <View style={{ marginTop: 37, flex: 1, justifyContent: "center" }}>
      <StatusBar style="auto" />

      <View style={styles.topView}>
        <Text style={styles.txtTop}>{strCalculation}</Text>
      </View>
      <View>
        <Operators />
      </View>
      <View>
        <Buttons />
      </View>
    </View>
  );
};

export default App;
