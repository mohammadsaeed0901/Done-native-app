import { StyleSheet, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import Text from '../components/Text';
import Constants from 'expo-constants';
import React from 'react'
import colors from '../config/colors';

const OfflineNotice = () => {
  const netInfo = useNetInfo(); 
    
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No Internet Connection!</Text>
        </View>
    )

  return null;
}

export default OfflineNotice

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        height: 50,
        width: "100%",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        top: Constants.statusBarHeight,
        backgroundColor: colors.primary,
    },
    text: {
        color: colors.white,
    },
})