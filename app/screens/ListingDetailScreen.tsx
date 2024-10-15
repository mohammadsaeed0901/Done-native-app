import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import Text from '../components/Text';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import ContactSellerForm from '../components/ContactSellerForm';

function ListingDetailScreen({ route }: { route: RouteProp<ParamListBase, string> }) {
    const listing = route.params;

    return (
        <KeyboardAvoidingView
            behavior='position'
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
            <Image style={styles.image} preview={{ uri: listing?.images[0].thumbnailUrl }} tint='light' uri={listing?.images[0].url} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{listing?.title}</Text>
                <Text style={styles.price}>${listing?.price}</Text>
                <View style={styles.userContainer}>
                    <ListItem image={require("../assets/myself.jpg")} title="Mohammad saeed Kazemi" subTitle="5 Listing" />
                </View>
                <ContactSellerForm listing={listing} />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetailScreen;