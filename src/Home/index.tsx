import { Feather } from "@expo/vector-icons";
import { View, TextInput, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import styles from './styles';


export default function Home(){
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.newTask}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                />
                <TouchableOpacity style={styles.button}>
                    <Feather name="plus-circle" size={18} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}