import React from 'react';
import Constants from "expo-constants";
import { SafeAreaView, type StyleProp, StyleSheet, View, type ViewStyle } from 'react-native';

interface ScreenPropsType {
    children: any;
    style?: StyleProp<ViewStyle>;
}

function Screen({ children, style }: ScreenPropsType) {
    return (
     <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.view, style]}>
            {children}
        </View>
     </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    view: {
        flex: 1,
    },
})

export default Screen;