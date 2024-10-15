import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{ presentation: "modal", headerShown: false }}> 
        <Stack.Screen name='Listings' component={ListingsScreen} />
        <Stack.Screen name='ListingDetails' component={ListingDetailScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;