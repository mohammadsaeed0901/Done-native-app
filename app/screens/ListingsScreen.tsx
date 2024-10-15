import React, { useEffect } from 'react';
import Screen from '../components/Screen';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/Text';
import Button from '../components/Button';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

export interface IListing {
    id: number;
    title: string;
    description: string;
    images:{
        url: string;
        thumbnailUrl: string;
    }[];
    price: number;
    categoryId: number;
    userId: number;
    location?: {
      latitude?: number;
      longitude?: number;
    }
}

function ListingsScreen({ navigation }: { navigation: any }) {
    const { data: listings, isError, isLoading, request: loadListings } = useApi(listingsApi.getListings);

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <>
            <ActivityIndicator visible={isLoading} />
            <Screen style={styles.screen}>
                {isError && (
                    <>
                        <AppText>Couldn't retrieve the listings.</AppText>
                        <Button title="Retry" onPress={loadListings} />
                    </>
                )}
                <FlatList 
                    data={listings}
                    keyExtractor={list => list.id.toString()}
                    renderItem={({ item }) => 
                        <Card
                            title={item.title}
                            subTitle={"$" + item.price}
                            imageUrl={item.images[0].url}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        />
                    }
                />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.lightDark
    }
})

export default ListingsScreen;