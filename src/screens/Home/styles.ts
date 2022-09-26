import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333"
  },
  header: {
    backgroundColor: "#0D0D0D",
    height: 190,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    marginTop: -5
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
  }
});
