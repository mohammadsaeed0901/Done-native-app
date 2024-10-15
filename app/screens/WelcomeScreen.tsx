import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import routes from '../navigation/routes';

function WelcomeScreen({ navigation }: { navigation: any }) {
    return (
        <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")} />
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title='login' onPress={() => navigation.navigate(routes.LOGIN)} />
                <Button title='register' color='secondary' onPress={() => navigation.navigate(routes.REGISTER)} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonContainer: {
        width: "100%",
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        alignItems: "center",
        position: "absolute",
        top: 70,
    },
    tagLine: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10
    }
});

export default WelcomeScreen;