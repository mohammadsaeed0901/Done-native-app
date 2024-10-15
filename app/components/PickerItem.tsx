import React from 'react';
import Text from './Text';
import { type GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native';
import { categoriesType } from '../screens/ListingEditScreen';

export interface PickerItemPropsType { 
    item: categoriesType; 
    onPress: (((event: GestureResponderEvent) => void) & (() => void)) | undefined;
}

function PickerItem({ item, onPress }: PickerItemPropsType) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})

export default PickerItem;