import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

const Buttons = () => {
  //create an array for the numbers 0-9
  var numbers = [];
  for (var i = 9; i >= 0; i--) {
    numbers.push(i);
  }

  function calculator() {
    alert("oi");
  }

  return (
    <View style={styles.buttonsView}>
      {numbers.map(function (val) {
        return (
          <TouchableOpacity
            onPress={() => calculator()}
            style={styles.buttonsBtn}
          >
            <Text style={styles.buttonsTxt}>{val}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default Buttons;
