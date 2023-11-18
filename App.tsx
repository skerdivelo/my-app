import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Components/Button";
import Header from "./Components/Header";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Header  buttonRight/>
            <Button title="Press me" onPress={() => alert("HELLO")} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#darkblue",
        alignItems: "center",
        justifyContent: "center",
    },
});
