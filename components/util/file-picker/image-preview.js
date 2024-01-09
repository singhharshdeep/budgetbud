import { View, ImageBackground, Pressable, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import theme, { typography } from '../../../theme';

const ImagePreview = ({ photo, onDiscard }) => {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      <View style={{
        position: 'absolute',
        top: 64,
        left: 16,
        zIndex: 10
      }}>
        <Pressable onPress={onDiscard}>
          <AntDesign name="close" size={32} color="white" />
        </Pressable>
      </View>
      <View style={{
        position: 'absolute',
        bottom: 48,
        right: 32,
        zIndex: 10,
        flex: 1
      }}>
        <Pressable onPress={onDiscard}>
          <Text style={[
            {
              color: 'white'
            },
            typography['text-2xl']
          ]}>Save</Text>
        </Pressable>
      </View>
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1
        }}
      />
    </View>
  )
}

export default ImagePreview