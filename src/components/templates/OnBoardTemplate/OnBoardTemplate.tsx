import {View, StyleSheet, Text, SafeAreaView} from "react-native";
import {Button} from "../../atoms";

import Carousel from "../../organisms/Carousel/Carousel";

const OnBoardTemplate = () => {
    return <View style={styles.container}>
        <SafeAreaView>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Travel</Text>
                <Text style={styles.subTitle}>App</Text>
            </View>
            <Text style={styles.planTrip}>Plan your trip now!</Text>
            <Carousel/>
            <View style={styles.buttonsWrapper}>
                <Button text={'Create account'} type={"filled"} style={{marginHorizontal: 20}}/>
                <Button type={"outlined"} text={'Sign In'} style={{marginHorizontal: 20}}/>
            </View>
        </SafeAreaView>
    </View>
}

export default OnBoardTemplate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        paddingVertical: 100,
    },
    title: {
        fontSize: 26,
        fontFamily: "Roboto_900Black",
        color: "#666666",
    },
    subTitle: {
        fontSize: 26,
        fontFamily: "Roboto_500Medium",
        color: "#666666",
    },
    titleWrapper: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    planTrip: {
        textAlign: 'center',
        fontFamily: "Roboto_400Regular",
        color: "#666666",
        letterSpacing: 2,
        marginTop: 10,
    },
    buttonsWrapper: {
        marginTop: 50,
        gap: 10,
    }
});