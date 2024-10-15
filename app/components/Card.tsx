import React from 'react';
import { Image } from 'react-native-expo-image-cache';
import { View, StyleSheet, TouchableWithoutFeedback, type GestureResponderEvent } from 'react-native';
import colors from '../config/colors';
import Text from './Text';

interface cardPropsType {
    title: string;
    subTitle: string;
    imageUrl: string;
    thumbnailUrl: string;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
}

function Card({ title, subTitle, imageUrl, thumbnailUrl ,onPress }: cardPropsType) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} tint='light' preview={{ uri: thumbnailUrl }} uri={imageUrl} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        marginBottom: 20,
        backgroundColor: colors.white,
        overflow: "hidden"
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        marginBottom: 7,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})

export default Card;