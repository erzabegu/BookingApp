import {StyleSheet} from "react-native";
import Colors from "../../../assets/colors";

const styles = StyleSheet.create({
    button: {
        height: 40,
        minHeight: 50,
        paddingHorizontal: 16,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
        borderWidth: 1,
        borderColor: '#95BF9E',
    },
    pressed: {
        opacity: 0.8,
    },
    outlined: {
        borderWidth: 1,
        borderColor: '#95BF9E',
    },
    filled: {
        backgroundColor: Colors.primary,
        borderWidth: 0,
        borderColor: 'none',
    },
    text: {
        fontFamily: "Roboto_400Regular",
        fontSize: 16,
    }
});
export default styles;