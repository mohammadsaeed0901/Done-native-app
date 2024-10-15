import React from 'react';
import colors from '../config/colors';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IconPropsType {
    name: React.ComponentProps<typeof MaterialCommunityIcons>['name'],
    size?: number;
    iconColor?: string;
    backgroundColor?: string;
}

function Icon({ 
        name, 
        size = 40, 
        backgroundColor = colors.black,
        iconColor = colors.white 
    }: IconPropsType) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
        </View>
    );
}

export default Icon;