import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 0,
        zIndex: 1,
        backgroundColor: "#262626",
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
    }
})