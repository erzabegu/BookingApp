import {Animated, FlatList} from "react-native";
import React, {useRef, useState} from "react";
import carouselData from "../../../data/CarouselData";
import {CarouselItem, CarouselPagination} from "../../molecules";

const Carousel = () => {
    const scrollX = useRef(new Animated.Value(40)).current;
    const [currentIndex, setCurrentIndex] = useState(0);
    const viewableItemsChanged = useRef(({viewableItems}: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const slidesRef = useRef(null);
    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
    return <>
        <FlatList
            horizontal
            data={carouselData}
            renderItem={({item}) => <CarouselItem item={item}/>}
            showsHorizontalScrollIndicator={false}
            //per snap scroll
            pagingEnabled
            bounces={false}
            keyExtractor={({id}) => String(id)}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false}
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
        />
        <CarouselPagination data={carouselData} currentIndex={currentIndex}/>
    </>
}

export default Carousel;