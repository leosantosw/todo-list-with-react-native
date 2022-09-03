import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 0,
        zIndex: 1,
        backgroundColor: "#1A1A1A",
        height: '100%',
    },
    newTask: {
        top: -30,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 22,
    },

    input: {
        flex: 1,
        marginRight: 4,
        padding: 16,
        fontSize: 16,
        borderRadius: 6,
        height: 60,
        backgroundColor: '#333333',
        color: '#F2F2F2',
    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },  
    noTasks: {
        alignItems: 'center',
        paddingHorizontal: 22,
    },
    separatorLine: {
        width: '100%',
        borderBottomColor: '#262626',
        borderBottomWidth: 2,
    },
    clipboardImage: {
        marginTop: 48,
        marginBottom: 16,
    },
    clipboardText: {
        color: '#808080',
        fontSize: 16,
        lineHeight: 19.6,
    },
    tasksStatus: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 22,
    },
    tasksStatusBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    tasksStatusTitle: {
        color: '#4EA8DE',
        marginRight: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    tasksStatusCount: {
        fontWeight: 'bold',
        color: '#F2F2F2',
        fontSize: 16,
        backgroundColor: '#333333',
        width: 30,
        height: 24,
        borderRadius: 12,
        textAlign: 'center',
    }
})