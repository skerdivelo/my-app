import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Button from "../Button";

type HeaderProps = {
    title: string;
    buttonLeft?: string;
    buttonRight?: string;
    onPressLeft?: () => void;
    onPressRight?: () => void;
};

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
    </View>
);

const App = () => (
    <SafeAreaView>
        <View style={styles.container}>
            <Header />
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
    },
    header: {
        position: "relative",
        height: 60,
        left: 0,
        right: 0,
        width: 390,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    headerText: {
        color: "white",
        fontSize: 20,
    },
});

export default App;
