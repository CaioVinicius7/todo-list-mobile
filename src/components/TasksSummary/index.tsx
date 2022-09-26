import { Text, View } from "react-native";

import { styles } from "./styles";

interface TasksSummaryProps {
  tasksQuantity: number;
  finishedTasksQuantity: number;
}

export function TasksSummary({
  tasksQuantity,
  finishedTasksQuantity
}: TasksSummaryProps) {
  return (
    <View style={styles.tasksSummary}>
      <View style={styles.tasksCounter}>
        <Text style={styles.createdTasks}>Criadas</Text>
        <Text style={styles.quantity}> {tasksQuantity} </Text>
      </View>

      <View style={styles.tasksCounter}>
        <Text style={styles.finishedTasks}>Concluídas</Text>
        <Text style={styles.quantity}> {finishedTasksQuantity} </Text>
      </View>
    </View>
  );
}
