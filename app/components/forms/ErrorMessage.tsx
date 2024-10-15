import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Text';

function ErrorMessage({ errorMsg, visible }: { errorMsg: string | undefined; visible: boolean | undefined }) {
    if (!errorMsg || !visible) return null;

    return <Text style={styles.error}>{errorMsg}</Text>;
}

const styles = StyleSheet.create({
    error: {
        color: "red",
    },
})

export default ErrorMessage;