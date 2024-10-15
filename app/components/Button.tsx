import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

interface AppButtonType {
    title: string;
    color?: string;
    onPress?: () => void;
}

function AppButton({ title, onPress, color = "primary" }: AppButtonType) {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        padding: 15,
        marginVertical: 10
    },
    text: {
        textTransform: "uppercase",
        fontSize: 18,
        fontWeight: "bold",
        color: colors.white
    }
})

export default AppButton;