import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/myself.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/myself.jpg"),
    }
]

function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message: any) => {
        setMessages(messages.filter(mess => mess.id !== message.id));
    }

    return (
        <Screen>
            <FlatList 
                data={messages} 
                ItemSeparatorComponent={() => <ListItemSeparator />}
                keyExtractor={message => message.id.toString()}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                          id: 2,
                          title: "T2",
                          description: "D2",
                          image: require("../assets/myself.jpg"),
                        },
                      ]);
                }}
                renderItem={({ item }) => 
                    <GestureHandlerRootView style={{ flex: 1 }}>
                        <ListItem 
                            title={item.title} 
                            image={item.image} 
                            subTitle={item.description}
                            onPress={() => console.log("message selected", item)} 
                            renderRightActions={() => (
                                <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}/>
                    </GestureHandlerRootView>
                } 
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
});

export default MessagesScreen;