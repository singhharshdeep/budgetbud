import { View, Text, PanResponder, Animated, useWindowDimensions } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import theme, { colors } from '../../theme';

const AlertProgressInput = () => {
  const [sliderDimension, setSliderDimension] = useState({
    width: 0,
    left: 0,
    right: 0
  });
  const [currentPosition, setCurrentPosition] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const stepper = useRef(new Animated.Value(0)).current;

  console.log(`currenposition: ${currentPosition}`);
  console.log(`left: ${sliderDimension.left}`);
  console.log(`right: ${sliderDimension.right}`);
  console.log(`width: ${sliderDimension.width}`);

  const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        stepper.setOffset(currentPosition);
      },
      onPanResponderMove: (_, { dx, moveX }) => {
        const offset = currentPosition + dx;

        if (offset > sliderDimension.left && offset < sliderDimension.right) {
          stepper.setValue(offset);
          setCurrentPosition(offset);
          setPercentage(Math.round((offset / sliderDimension.right) * 100));
        } else if (offset < sliderDimension.left) {
          console.log("Going low")
          stepper.setValue(sliderDimension.left);
          setCurrentPosition(sliderDimension.left);
          setPercentage(0);
        } else if (offset > sliderDimension.right) {
          console.log("Going high")
          stepper.setValue(sliderDimension.right);
          setCurrentPosition(sliderDimension.right);
          setPercentage(100);
        }
      }
    }
    );

  return (
    <View
      onLayout={(e) => {
        const { width, x } = e.nativeEvent.layout;
        setSliderDimension({
          width: width,
          left: x,
          right: x + (width - 48)
        })
      }}
      style={{
        width: '100%',
        height: 16,
        backgroundColor: colors['gray-200'],
        borderRadius: 20,
        flexDirection: 'row'
      }}>
      <View style={{
        width: `${percentage}%`,
        height: 16,
        backgroundColor: theme.colors.primary,
        borderRadius: 20
      }} />
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          top: -8,
          justifyContent: 'center',
          alignItems: 'center',
          height: 30,
          width: 48,
          borderWidth: 3,
          borderColor: 'white',
          borderRadius: 15,
          backgroundColor: theme.colors.primary,
          zIndex: 10,
          transform: [{
            translateX: stepper._value
          }]
        }}
      >
        <Text style={{ color: 'white' }}>{percentage}%</Text>
      </Animated.View>
    </View>
  )
}

export default AlertProgressInput