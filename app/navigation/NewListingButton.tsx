import { type GestureResponderEvent, StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import colors from '../config/colors';

const NewListingButton = ({ onPress }: { onPress: ((event: GestureResponderEvent) => void) | undefined }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name='plus-circle' size={40} color={colors.white} />
        </View>
    </TouchableOpacity>
  )
}

export default NewListingButton;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        borderColor: colors.white,
        color: colors.white,
        height: 80,
        width: 80,
        borderRadius: 40,
        bottom: 30,
        borderWidth: 10,
    },
})