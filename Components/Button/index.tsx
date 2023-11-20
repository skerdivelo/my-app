import React from "react";
import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import style from "./style";

type ButtonProps = {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>; // Aggiungi una prop style qui
};

const Button: React.FC<ButtonProps> = ({ title, onPress, style: customStyle }) => {
    return (
        <TouchableOpacity style={[style.button, customStyle]} onPress={onPress}>
            <Text style={style.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;