import {Text, View, Button} from "react-native";
import firebaseApp, {auth} from "../../../utils/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {Input} from "../../atoms";

const LoginPage = () => {

    const signUp = () => {
        createUserWithEmailAndPassword(auth, "ereza@dua.com", "erzabegu3").then((res) => {
            console.log(res, "res")
        })
    }
    const login = () => {
        signInWithEmailAndPassword(auth, "ereza@dua.com", "erzabegu3").then((res) => {
                console.log(res, "res")
            }
        )
    }
    return <View>
        <Button onPress={signUp} title={"signup"}/>
        <Button onPress={login} title={"login"}/>
        <Input/>
    </View>
}

export default LoginPage;