import React, { ReactNode } from 'react';
import { Animated, GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, TouchableHighlight, View } from 'react-native';
import AppText from '../Text';
import colors from '../../config/colors';
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ListItemPropsType {
    title: string;
    subTitle?: string;
    image?: string;
    IconComponent?: ReactNode;
    renderRightActions?: ((progressAnimatedValue: Animated.AnimatedInterpolation<string | number>,
         dragAnimatedValue: Animated.AnimatedInterpolation<string | number>,
         swipeable: Swipeable) => React.ReactNode) | undefined;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }: ListItemPropsType) {
    return (
        // <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.lightDark} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image as ImageSourcePropType} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name='chevron-right' size={25} color={colors.medium}  />
                </View>
            </TouchableHighlight>
        // </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        backgroundColor: colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colors.medium,
    },
})

export default ListItem;