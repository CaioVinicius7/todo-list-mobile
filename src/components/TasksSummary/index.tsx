import { Text, View } from "react-native";

import { styles } from "./styles";

export function TasksSummary() {
  return (
    <View style={styles.tasksSummary}>
      <View style={styles.tasksCounter}>
        <Text style={styles.createdTasks}>Criadas</Text>
        <Text style={styles.quantity}> 0 </Text>
      </View>

      <View style={styles.tasksCounter}>
        <Text style={styles.finishedTasks}>Concluídas</Text>
        <Text style={styles.quantity}> 0 </Text>
      </View>
    </View>
  );
}
