import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasksSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  tasksCounter: {
    flexDirection: "row"
  },
  createdTasks: {
    color: "#4EA8DE",
    fontWeight: "bold"
  },
  finishedTasks: {
    color: "#8284FA",
    fontWeight: "bold"
  },
  quantity: {
    marginLeft: 5,
    color: "#D9D9D9",
    backgroundColor: "#454545",
    borderRadius: 9999,
    paddingLeft: 5,
    paddingRight: 5
  }
});
