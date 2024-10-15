import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors';
import { FlatList, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import routes from '../navigation/routes';
import useAuth from '../hooks/useAuth';

const menuItems: 
    { 
        title: string;
        targetScreen: string;
        icon: { 
            name: React.ComponentProps<typeof MaterialCommunityIcons>['name']; 
            backgroundColor: string; 
        };
    }[] = [
    {
        title: "My Listing",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
        targetScreen: "MyListing",
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES,
    }
];

function AccountScreen({ navigation }: { navigation: any }) {
    const { user, logout } = useAuth();

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title={user?.name as string}
                    subTitle={user?.email}
                    image={require("../assets/myself.jpg")} />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={() => <ListItemSeparator />}
                    renderItem={({ item }) => 
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}  />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                />
            </View>
            <ListItem 
                title='Log Out' 
                IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />} 
                onPress={() => logout()}/>
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.lightDark
    },
    container: {
        marginVertical: 20
    },
})

export default AccountScreen;