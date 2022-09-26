import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { EmptyList } from "../../components/EmptyList";

import { styles } from "./styles";

export function Home() {
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
          <Image source={require("../../../assets/button-icon.png")} />
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
        data={[]}
        keyExtractor={(item) => item}
        renderItem={(item) => <Text>teste</Text>}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
}
