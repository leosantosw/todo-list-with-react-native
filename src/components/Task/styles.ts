import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    taskContainer: {
        backgroundColor: '#262626',
        paddingVertical: 30,
        paddingHorizontal: 15,
        borderRadius: 6,
        marginBottom: 16,
        marginHorizontal: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    taskTitle: {
        color: '#F2F2F2',
        fontSize: 16,
        marginHorizontal: 12,
    },
    completedTaskTitle: {
        textDecorationLine: 'line-through',
        color: '#A09CB1',
    },
    taskIsCompleted: {
        
    },
    taskDeleteButton: {

    }
})