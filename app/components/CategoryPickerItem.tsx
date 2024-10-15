import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { type PickerItemPropsType } from './PickerItem';
import Icon from './Icon';
import Text from './Text';

function CategoryPickerItem({ item, onPress }: PickerItemPropsType) {
    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80} />
            <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%",
    },
    label: {
        fontSize: 16,
        marginTop: 5,
        textAlign: "center"
    },
})

export default CategoryPickerItem;