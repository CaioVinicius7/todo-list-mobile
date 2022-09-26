import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333"
  },
  header: {
    backgroundColor: "#0D0D0D",
    height: 175,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    marginTop: -15
  },
  form: {
    flexDirection: "row",
    marginTop: -35,
    marginLeft: 25,
    marginRight: 25
  },
  newTaskInput: {
    flex: 1,
    backgroundColor: "#262626",
    color: "#F2F2F2",
    borderRadius: 6,
    border: "1px solid #0D0D0D",
    padding: 16,
    fontSize: 16,
    marginRight: 5
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  tasksContainer: {
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25
  },
  tasksSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: "#454545"
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
