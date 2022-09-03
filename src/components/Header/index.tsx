import styles from './styles';
import { View, Image } from "react-native";
import logoImg from '../../../assets/logo.png';

export default function Header(){
    return (
        <View style={styles.container}>
            <Image
                source={logoImg} 
            />
        </View>
    )
}