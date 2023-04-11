import {PressableProps, StyleProp} from "react-native";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export interface ButtonTypes extends PressableProps {
    text: string;
    onPress?: () => void;
    type?: "filled" | "outlined";
    style?: StyleProp<ViewStyle>;
}