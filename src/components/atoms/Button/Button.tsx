import {Pressable, Text} from "react-native";
import {ButtonTypes} from "./Button.types";
import Colors from "../../../assets/colors";
import styles from "./styles";

const Button = ({text, onPress, type = "filled", style, ...rest}: ButtonTypes) => {

    return <Pressable onPress={onPress}
                      android_ripple={{color: Colors.primary}}
                      style={({pressed}) => [styles.button, pressed && styles.pressed,
                          styles[type], style]} {...rest}>
        <Text style={[styles.text, {color: type === "filled" ? "#f2f2f2" : "#666666"}]}>{text}</Text>
    </Pressable>
}
export default Button;
