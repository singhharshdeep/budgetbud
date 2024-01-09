import { View, Text, PanResponder, Animated, useWindowDimensions } from 'react-native'
import { useRef, useState } from 'react'
import theme, { colors } from '../../theme';

const AlertProgressInput = () => {
  const [position, setPosition] = useState(0);
  const width = useWindowDimensions().width;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
          setPosition(gestureState.moveX);
      }
    }),
  ).current;

  return (
    <View style={{
      width: '100%',
      height: 16,
      backgroundColor: colors['gray-200'],
      borderRadius: 20
    }}>
      <View style={{
        width: '50%',
        height: 16,
        backgroundColor: theme.colors.primary,
        borderRadius: 20
      }}></View>
      <View style={{
        position: 'absolute',
        top: -8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        height: 30,
        width: 48,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 15,
        backgroundColor: theme.colors.primary,
        transform: [{ translateX: position }]
      }}
      {...panResponder.panHandlers}
      >
        <Text style={{ color: 'white' }}>0%</Text>
      </View>
    </View>
  )
}

export default AlertProgressInput