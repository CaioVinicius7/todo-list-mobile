import { TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

interface TaskProps {
  name: string;
  finished: boolean;
}

export function Task({ name, finished }: TaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#5E60CE"
          unfillColor="transparent"
          innerIconStyle={{
            borderColor: `${finished ? "#5E60CE" : "#4EA8DE"}`
          }}
          text={name}
          textStyle={{
            color: `${finished ? "#808080" : "#F2F2F2"}`
          }}
          isChecked={finished}
        />
      </View>
      <TouchableOpacity style={styles.deleteTaskContainer}>
        <Feather name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
