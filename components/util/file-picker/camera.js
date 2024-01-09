import {
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  Text,
} from "react-native";
import { Camera as ExpoCamera } from 'expo-camera';
import { useState } from "react";
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

import ImagePreview from "./image-preview";
import { SafeAreaView } from "react-native-safe-area-context";

const Camera = ({ onClose }) => {
  let camera = null;

  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [flashMode, setFlashMode] = useState('off');
  const [cameraType, setCameraType] = useState(ExpoCamera.Constants.Type.back)

  const handleFlashMode = () => {
    if (flashMode === 'on') {
      setFlashMode('off')
    } else if (flashMode === 'off') {
      setFlashMode('on')
    } else {
      setFlashMode('auto')
    }
  }

  const switchCamera = () => {
    if (cameraType === 'back') {
      setCameraType('front')
    } else {
      setCameraType('back')
    }
  }

  const takePicture = async () => {
    if (!camera) return
    const photo = await camera.takePictureAsync();
    console.log(photo)
    setPreviewVisible(true)
    setCapturedImage(photo)
  };

  const onDiscard = () => {
    setPreviewVisible(false);
    setCapturedImage(null);
  }

  return (
    <Modal>
      {
        previewVisible && capturedImage ? (
          <ImagePreview
            photo={capturedImage}
            onDiscard={onDiscard}
          />
        ) : (
          <ExpoCamera
            type={cameraType}
            flashMode={flashMode}
            style={{ flex: 1, width: "100%" }}
            ref={(r) => {
              camera = r;
            }}
          >
            <TouchableOpacity
              onPress={handleFlashMode}
              style={{
                position: 'absolute',
                right: '5%',
                top: '8%',
              }}
            >
              <Ionicons name={flashMode === 'on' || flashMode === 'auto' ? "flash" : "flash-off"} size={32} color="white" />
            </TouchableOpacity>
            <SafeAreaView style={{
              position: 'absolute',
              top: '8%',
              left: '5%'
            }}>
              <Pressable onPress={onClose}>
                <AntDesign name="close" size={32} color="white" />
              </Pressable>
            </SafeAreaView>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row',
                flex: 1,
                width: '100%',
                padding: 20,
                justifyContent: 'space-between'
              }}
            >
              <View
                style={{
                  alignSelf: 'center',
                  flex: 1,
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity
                  onPress={takePicture}
                  style={{
                    width: 70,
                    height: 70,
                    bottom: 32,
                    borderRadius: 50,
                    backgroundColor: '#fff'
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
                onPress={switchCamera}
                style={{
                  position: 'absolute',
                  bottom: '7%',
                  right: '5%'
                }}
              >
                <MaterialIcons name="flip-camera-ios" size={32} color="white" />
              </TouchableOpacity>
          </ExpoCamera>
        )
      }
    </Modal>
  )
}

export default Camera