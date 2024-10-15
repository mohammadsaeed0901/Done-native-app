import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import ImageInput from './ImageInput';

interface ImageInputListPropsType {
    imageUris: (string | null)[];
    onAddImage: (e: string | null) => void;
    onRemoveImage: (e: string | null) => void;
}

export default function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }: ImageInputListPropsType ) {
    const { current } = useRef<React.LegacyRef<ScrollView> | undefined>();

    

    return (
    <View>
        <ScrollView
            horizontal 
            ref={current} 
            onContentSizeChange={() => current?.scrollToEnd()}>
                <View style={styles.container}>
                {imageUris.map((uri) => (
                    <View key={uri} style={styles.image}>
                        <ImageInput 
                            imageUri={uri}
                            onChangeImage={() => onRemoveImage(uri)}
                        />
                    </View> 
                ))}
                <ImageInput onChangeImage={uri => onAddImage(uri)} />
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image : {
        marginRight: 10,
    },
})