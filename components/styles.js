import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  topView: {
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderTopColor: "black",
    backgroundColor: "#9e9b9b",
    height: 100,
    justifyContent: "center",
  },
  txtTop: {
    fontSize: 30,
    textAlign: "right",
    fontWeight: "bold",
  },
  operatorBtnTxt: {
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#9e9b9b",
    borderWidth: 2,
    borderColor: "white",
    fontWeight: "bold",
    padding: 20,
    height: 80,
  },
  operatorBtn: {
    width: "25%",
  },
  buttonsView: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonsTxt: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    height: 70,
    padding: 18,
  },
  buttonsBtn: {
    width: "33.33%",
    textAlign: "center",
    backgroundColor: "#9e9b9b",
    borderWidth: 2,
    borderColor: "white",
  },
  buttonsBtnClear: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#9e9b9b",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "black",
  },
});
export default styles;
