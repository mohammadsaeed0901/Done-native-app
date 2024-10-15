import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../config/colors';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ImageInputPropsType {
    imageUri?: string | null;
    onChangeImage: (e: string | null) => void;
}
 
export default function ImageInput({ imageUri, onChangeImage }: ImageInputPropsType) {
    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) alert("You need to enable permission to access the library");
    }
    
    useEffect(() => {
        requestPermission();
    }, []);
   
    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert("Delete", "Are you sure you want to delete this image?", [ 
            { text: "Yes", onPress: () => onChangeImage(null) }, 
            { text: "No" }
        ]);
    }

    const selectImage = async () => {
        try {
          const { canceled, assets } = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
          });
          if (!canceled) {
            onChangeImage(assets[0].uri);
          }
        } catch (error) {
          console.log("Image error is: ", error);
        }
    }

  return (
   <TouchableWithoutFeedback onPress={handlePress}>
    <View style={styles.container}>
      {!imageUri && <MaterialCommunityIcons color={colors.medium} name='camera' size={40} />}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
   </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightDark,
        borderRadius: 15,
        height: 100,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    }
})