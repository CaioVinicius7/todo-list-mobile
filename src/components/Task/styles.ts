import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 10,

    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#808080",
    backgroundColor: "#454545",

    flexDirection: "row",
    justifyContent: "space-between"
  },
  taskContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  deleteTaskContainer: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center"
  }
});
