import { StyleSheet } from "react-native";

export default StyleSheet.create({
    button: {
        textAlign: "center",
        backgroundColor: "#687EFF",
        padding: 13,
        margin: 10,
        borderRadius: 10,
    },
    buttonPressed: {
        textAlign: "center",
        backgroundColor: "green",
        padding: 13,
        margin: 10,
        borderRadius: 50, // Rende il pulsante circolare
    },
    buttonText: {
        fontSize: 20,
        color: "white",
    },
});