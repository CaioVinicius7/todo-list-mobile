import {
  Alert,
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
import { useState } from "react";

interface Task {
  description: string;
  finished: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleAddNewTask() {
    if (newTask === "") {
      return Alert.alert(
        "Tarefa inválida!",
        "Preencha a tarefa que deseja adicionar...."
      );
    }

    const tasksDescription = tasks.map((task) => task.description);

    if (tasksDescription.includes(newTask)) {
      return Alert.alert(
        "Tarefa já cadastrada!",
        "Ops, parece que essa tarefa já foi cadastrada anteriormente..."
      );
    }

    setTasks((prevState) => {
      return [
        ...prevState,
        {
          description: newTask,
          finished: false
        }
      ];
    });

    setNewTask("");
  }

  function handleFinishTask(description: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.description === description) {
        task.finished = !task.finished;
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function handleRemoveTask(description: string) {
    Alert.alert("Remover", `Deseja remover essa tarefa?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) =>
            prevState.filter((task) => task.description !== description)
          );
        }
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  }

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
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
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
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => (
          <Task
            description={item.description}
            finished={item.finished}
            onFinish={handleFinishTask}
            onRemove={handleRemoveTask}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
}
