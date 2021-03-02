import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

const Operators = () => {
  return (
    <View style={styles.operatorView}>
      <TouchableOpacity style={styles.operatorBtn}>
        <Text style={styles.operatorBtnTxt}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorBtn}>
        <Text style={styles.operatorBtnTxt}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorBtn}>
        <Text style={styles.operatorBtnTxt}>/</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorBtn}>
        <Text style={styles.operatorBtnTxt}>*</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Operators;
