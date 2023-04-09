import {ImageBackground, Text, StyleSheet, View, SafeAreaView, Button} from "react-native";
import Animated, {FadeInUp} from 'react-native-reanimated';
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

const LandingPage = () => {
    const navigation = useNavigation();
    const [show, setShow] = useState(true);
    return show ? <Animated.View exiting={FadeInUp}>
        <ImageBackground style={styles.container}
                         source={{uri: "https://i.pinimg.com/564x/fa/af/88/faaf8850b479feb2032b3a2e05a56e1e.jpg"}}/>
        <View style={styles.overlay}>
            <SafeAreaView>
                <Text>Travel App</Text>
                <Text>Find and try a new experience with just a few clicks</Text>
                <Button title={"Get Started"} onPress={() => {
                    setShow(false)
                    navigation.navigate('login' as never)
                }}/>
            </SafeAreaView>
        </View>
    </Animated.View> : null

}

export default LandingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.3)",

    }
});