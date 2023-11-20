import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import Header from "./Components/Header";
import Button from "./Components/Button";

export default function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Gestisci il login qui
        alert(`Username: ${username}, Password: ${password}`);
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Button style={styles.button} title="Login" onPress={handleLogin} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", // Aggiungi questo per centrare orizzontalmente
    },
    inputContainer: {
        width: "80%", // Riduci la larghezza per permettere il centratura orizzontale
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: "blue",
        marginTop: 20,
        padding: 10,
        alignItems: "center",
        alignSelf: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },
});