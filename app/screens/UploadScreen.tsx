import { Modal, StyleSheet, View } from 'react-native'
import React from 'react'
import ProgressBar from 'react-native-progress/Bar'
import colors from '../config/colors'
import LottieView from 'lottie-react-native'

interface UploadScreenPropTypes {
  progress: number; 
  visible: boolean; 
  onDone: () => void;
}

const UploadScreen = ({ progress = 0, visible = false, onDone }: UploadScreenPropTypes) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? <ProgressBar color={colors.primary} progress={progress} width={200} /> : 
        <LottieView 
          autoPlay 
          loop={false}
          onAnimationFinish={onDone}
          style={styles.animation} 
          source={require("../assets/animations/done.json")} />
        }
      </View>
    </Modal>
  )
}

export default UploadScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    animation: {
      width: 150,
    },
})