import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

const Buttons = (props) => {
  //create an array for the numbers 0-9
  var numbers = [];
  for (var i = 9; i > 0; i--) {
    numbers.push(i);
  }

  //main function for the calculation
  function calculator(n) {
    if (props.operator == "") {
      props.setFirstNumber(
        //the 2 lines below will concatenate one number to other, click 1 and 4 will result in 14
        parseInt(props.firstNumber.toString() + n.toString())
      );
      props.setStrCalculation(
        parseInt(props.firstNumber.toString() + n.toString())
      );
    }

    //setting the number entered one of the operators
    if (
      (n == "/" || n == "*" || n == "-" || n == "+") &&
      props.secondNumber == 0
    ) {
      props.setStrCalculation(props.firstNumber.toString() + n);
      props.setOperator(n);
    }

    if (props.operator != "") {
      //the second number will follow the same idea
      props.setSecondNumber(
        parseInt(props.secondNumber.toString() + n.toString())
      );
      //this will add the first number + operator + second number
      props.setStrCalculation(
        props.firstNumber +
          props.operator +
          parseInt(props.secondNumber.toString() + n.toString())
      );
    }

    //condition for the calculation
    if (n == "=") {
      let result = 0;
      if (props.operator == "+") {
        result = props.firstNumber + props.secondNumber;
      } else if (props.operator == "-") {
        result = props.firstNumber - props.secondNumber;
      } else if (props.operator == "*") {
        result = props.firstNumber * props.secondNumber;
      } else if (props.operator == "/") {
        result = props.firstNumber / props.secondNumber;
      }
      //the lines below will allow the user to continue to calculate
      props.setStrCalculation(result);
      props.setFirstNumber(result);
      props.setOperator("");
      props.setSecondNumber(0);
    }

    //clear the calculation completely
    if (n == "CLEAR") {
      props.setStrCalculation("0");
      props.setFirstNumber("");
      props.setSecondNumber("");
      props.setOperator("");
    }
  }

  return (
    <View style={styles.buttonsView}>
      <TouchableOpacity
        onPress={() => calculator("+")}
        style={styles.operatorBtn}
      >
        <Text style={styles.operatorBtnTxt}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => calculator("-")}
        style={styles.operatorBtn}
      >
        <Text style={styles.operatorBtnTxt}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => calculator("/")}
        style={styles.operatorBtn}
      >
        <Text style={styles.operatorBtnTxt}>/</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => calculator("*")}
        style={styles.operatorBtn}
      >
        <Text style={styles.operatorBtnTxt}>*</Text>
      </TouchableOpacity>
      {numbers.map(function (val) {
        return (
          <TouchableOpacity
            onPress={() => calculator(val)}
            style={styles.buttonsBtn}
          >
            <Text style={styles.buttonsTxt}>{val}</Text>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity
        onPress={() => calculator(".")}
        style={styles.buttonsBtn}
      >
        <Text style={styles.buttonsTxt}>.</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => calculator(numbers)}
        style={styles.buttonsBtn}
      >
        <Text style={styles.buttonsTxt}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => calculator("=")}
        style={styles.buttonsBtn}
      >
        <Text style={styles.buttonsTxt}>=</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => calculator("CLEAR")}
        style={styles.buttonsBtnClear}
      >
        <Text style={styles.buttonsTxt}>CLEAR</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Buttons;
