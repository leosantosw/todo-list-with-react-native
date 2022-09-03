import styles from './styles';
import { useEffect, useState } from "react";
import { Task } from "../components/Task";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";
import clipboard from '../../assets/clipboard.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, TextInput, TouchableOpacity, Image, Text, FlatList, Alert } from "react-native";

type Task = {
    id: number;
    title: string;
    isCompleted: boolean;
}

export default function Home() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);

    async function getData(){
        try {
            const data = await AsyncStorage.getItem('@tasks');
            if(data){
                setTasks(JSON.parse(data));
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    async function handleAddTask() {
        const data = {
            id: new Date().getTime(),
            title: task,
            isCompleted: false
        }

        setTasks([...tasks, data]);
        await AsyncStorage.setItem('@tasks', JSON.stringify([...tasks, data]));
        setTask('');
    }

    function handleRemoveTask(id: number) {
        Alert.alert('Remover tarefa', 'Tem certeza que deseja remover essa tarefa?', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: async () => {
                    const filteredTasks = tasks.filter(task => task.id !== id);
                    setTasks(filteredTasks);
                    await AsyncStorage.setItem('@tasks', JSON.stringify(filteredTasks));
                }
            }
        ])
    }

    async function handleCompleteTask(id: number) {
        const newTasks = tasks.map(task => task.id === id ? {
            ...task,
            isCompleted: !task.isCompleted
        } : task);

        setTasks(newTasks);
        await AsyncStorage.setItem('@tasks', JSON.stringify(newTasks));
    }
    
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.newTask}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    value={task}
                    onChangeText={setTask}
                />
                <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                    <Feather name="plus-circle" size={18} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.tasksStatus}>
                <View style={styles.tasksStatusBox}>
                    <Text style={styles.tasksStatusTitle}>Criadas</Text>
                    <Text style={styles.tasksStatusCount}>{tasks.length}</Text>
                </View>

                <View style={styles.tasksStatusBox}>
                    <Text style={[styles.tasksStatusTitle, { color: '#8284FA' }]}>Concluídas</Text>
                    <Text style={styles.tasksStatusCount}>
                        {
                            tasks.filter(task => task.isCompleted).length
                        }
                    </Text>
                </View>
            </View>

            <FlatList 
                data={tasks}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <Task 
                        id={item.id}
                        key={item.id}
                        title={item.title} 
                        isCompleted={item.isCompleted} 
                        onRemoveTask={handleRemoveTask}
                        onCompleteTask={handleCompleteTask}
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={styles.noTasks}>
                        <View style={styles.separatorLine} />
                        <Image style={styles.clipboardImage} source={clipboard} />
                        <Text style={[styles.clipboardText, { fontWeight: 'bold' }]}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.clipboardText}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}