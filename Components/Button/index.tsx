import React from "react";
import { TouchableOpacity, Text } from "react-native";
import style from "./style";

type ButtonProps = {
    title: string;
    onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Text style={style.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
