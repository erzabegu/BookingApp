import {TextInput} from "react-native";
import {InputTypes} from "./Input.types";
import styles from './styles'

const Input = ({...rest}: InputTypes) => {
    return <TextInput {...rest} style={styles.input}/>
}

export default Input;