import React from 'react';
import { type StyleProp, Text, type TextProps, type TextStyle } from 'react-native';

import defaultStyles from '../config/styles';

interface AppTextPropsType extends TextProps {
    children: any;
    style?: StyleProp<TextStyle>;
}

function AppText({ children, style, ...otherProps }: AppTextPropsType) {
    return (
        <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>
    );
}

export default AppText;

