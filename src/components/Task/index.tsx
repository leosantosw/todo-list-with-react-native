import styles from './styles';
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

type TaskProps = {
  id: number;
  title: string;
  isCompleted: boolean;
  onRemoveTask: (id: number) => void;
  onCompleteTask: (id: number) => void;
}

export function Task ({ id, title, isCompleted, onRemoveTask, onCompleteTask }: TaskProps) {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity style={styles.taskIsCompleted} onPress={() => onCompleteTask(id)}>
        <Feather name={isCompleted ? "check-circle": "circle"} size={22} color="#4EA8DE" />
      </TouchableOpacity>
      <Text style={[styles.taskTitle, isCompleted && styles.completedTaskTitle]}>{title}</Text>
      <TouchableOpacity style={styles.taskDeleteButton} onPress={() => onRemoveTask(id)}>
        <Feather name="trash" size={22} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}