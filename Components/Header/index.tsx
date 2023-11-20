import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StyleProp, ViewStyle } from "react-native";
import Button from "../Button";
import styles from "./style";

type HeaderProps = {
    title: string;
    buttonLeft?: React.ReactNode;
    buttonRight?: React.ReactNode;
    onPressLeft?: () => void;
    onPressRight?: () => void;
    style?: StyleProp<ViewStyle>;
};

const Header: React.FC<HeaderProps> = ({ title, buttonLeft, buttonRight }) => (
    <View style={styles.header}>
        <View style={styles.buttonContainer}>{buttonLeft}</View>
        <Text style={styles.headerText}>{title}</Text>
        <View style={styles.buttonContainer}>{buttonRight}</View>
    </View>
);

const App = () => (
    <SafeAreaView style={styles.container}>
        <Header 
            title="Header"
            buttonLeft={<Button title="Left" onPress={() => alert("Left button pressed")} />}
            buttonRight={<Button title="Right" onPress={() => alert("Right button pressed")} />}
        />
    </SafeAreaView>
);

export default App;