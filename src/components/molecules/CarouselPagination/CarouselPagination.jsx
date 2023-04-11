import { View, StyleSheet} from "react-native";
import Colors from "../../../assets/colors";

const CarouselPagination = ({data, currentIndex}) => {
    return <View style={styles.container}>
        {data.map((_, i) => (
            <View style={[styles.dot, {
                width: i === currentIndex ? 10 : 5,
                backgroundColor: i === currentIndex ? Colors.primary : '#D4D7E4'
            }]} key={i}>
            </View>
        ))}
    </View>
}
export default CarouselPagination;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50
    },
    dot: {
        height: 5,
        borderRadius: 5,
        marginLeft: 4,
    }
});