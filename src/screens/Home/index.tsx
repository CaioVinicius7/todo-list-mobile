import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { EmptyList } from "../../components/EmptyList";
import { Task } from "../../components/Task";

import { styles } from "./styles";

export function Home() {
  const tasks = [
    {
      name: "Concluir o primeiro desafio de react native",
      finished: false
    },
    {
      name: "Assistir o primeiro módulo de react native",
      finished: false
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.newTaskInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.button}>
          <AntDesign name="pluscircleo" size={20} color="#F2F2F2" />
        </TouchableOpacity>
      </View>

      <View style={styles.tasksContainer}>
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
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Task name={item.name} finished={item.finished} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
}
