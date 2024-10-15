import React from 'react';
import { StyleSheet, TextInput, View, type TextInputProps, type DimensionValue } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

import defaultStyles from '../config/styles';

export interface AppTextInputPropsType extends TextInputProps {
    width?: DimensionValue | undefined;
    iconName?: React.ComponentProps<typeof MaterialCommunityIcons>['name'],
}

function AppTextInput({ iconName, width = "100%", ...otherProps }: AppTextInputPropsType) {
    return (
        <View style={[styles.container, { width }]}>
            {iconName && <MaterialCommunityIcons 
                name={iconName}
                size={20}
                color={defaultStyles.colors.medium}
                style={styles.icon} />}
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={defaultStyles.text} 
                {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightDark,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 25,
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
})

export default AppTextInput;