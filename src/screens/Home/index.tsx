import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
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
    </View>
  );
}
