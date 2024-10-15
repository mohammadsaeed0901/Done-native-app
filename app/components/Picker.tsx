import React, { type ElementType, useState } from 'react';
import { Button, type DimensionValue, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

import defaultStyles from '../config/styles';
import Text from "./Text";
import Screen from './Screen';
import PickerItem from './PickerItem';

interface AppPickerPropsType {
    items: any[];
    selectedItem: any;
    onSelectItem:  React.Dispatch<React.SetStateAction<any>>;
    placeholder: string;
    numberOfColumns?: number;
    width?: DimensionValue | undefined;
    PickerItemComponent?: ElementType;
    iconName?: React.ComponentProps<typeof MaterialCommunityIcons>['name'],
}

function AppPicker({ 
    items, 
    iconName, 
    placeholder, 
    selectedItem, 
    onSelectItem,
    numberOfColumns = 1, 
    width, 
    PickerItemComponent = PickerItem, 
    ...otherProps }: AppPickerPropsType) {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
      <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {iconName && <MaterialCommunityIcons 
                        name={iconName}
                        size={20}
                        color={defaultStyles.colors.medium}
                        style={styles.icon} />}
                    {selectedItem ? 
                        <Text style={styles.text}>{selectedItem.label}</Text>
                    : <Text style={styles.placeholder}>{placeholder}</Text>}
                    <MaterialCommunityIcons 
                        name={"chevron-down"}
                        size={20}
                        color={defaultStyles.colors.medium}
                    />
                </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType='slide'>
            <Screen>
                <Button title='Close' onPress={() => setModalVisible(false)} />
                <FlatList 
                    data={items}
                    numColumns={numberOfColumns}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) =>(
                        <PickerItemComponent 
                            item={item}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />
                    )}
                />
            </Screen>
        </Modal>
      </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightDark,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 25,
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1,
    },
    placeholder: {
        flex: 1,
        color: defaultStyles.colors.medium
    },
})

export default AppPicker;