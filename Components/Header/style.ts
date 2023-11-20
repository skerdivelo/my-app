import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        bottom: 262,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80, // Increase height for a more prominent header
        width: "100%",
        backgroundColor: "#3498db", // Use a shade of blue
        shadowColor: "#000", // Add shadow color (iOS)
        shadowOffset: { width: 0, height: 2 }, // Add shadow offset (iOS)
        shadowOpacity: 0.2, // Add shadow opacity (iOS)
        zIndex: 1000,
    },
    buttonContainer: {
        width: "32%", // Adjust width for better spacing
    },
    headerText: {
        color: "white",
        fontSize: 24, // Increase font size for better visibility
        fontWeight: "bold",
    },
});

export default styles;
