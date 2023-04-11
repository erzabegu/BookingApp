import { useWindowDimensions, View, StyleSheet, Image} from 'react-native';

const CarouselItem = ({item}) => {
    const {width} = useWindowDimensions();
    return <View style={[styles.container, {width}]}>
        <Image source={{uri: item.image}}
               style={styles.image}
               resizeMode={"contain"}/>
    </View>
}

export default CarouselItem;

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: 500,
    }
});