import React from 'react'
import LottieView from 'lottie-react-native'
import { StyleSheet, View } from 'react-native';

const ActivityIndicator = ({ visible = false }: { visible: boolean }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView autoPlay loop source={require("../assets/animations/loader.json")} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    opacity: 0.8,
    position: "absolute",
    zIndex: 1,
  }
})

export default ActivityIndicator