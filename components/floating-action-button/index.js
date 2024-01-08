import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { Animated, Pressable, View } from "react-native";

import TabBg from "../../components/tab-bg";
import theme, { colors } from "../../theme";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  const startAnimation = () =>
    Animated.timing(animatedValue, {
      toValue: isOpen ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();

  const handlePress = () => {
    setIsOpen(!isOpen);
    startAnimation();
  };

  return (
    <View
      pointerEvents="box-none"
      style={{
        position: "relative",
        width: 75,
        alignItems: "center",
      }}
    >
      <TabBg
        color={colors["gray-200"]}
        style={{
          position: "absolute",
          top: 0,
          backgroundColor: "white",
        }}
      />
      <Pressable
        onPress={handlePress}
        style={{
          zIndex: 100,
          top: -22.5,
          justifyContent: "center",
          alignItems: "center",
          width: 50,
          height: 50,
          borderRadius: 27,
          backgroundColor: theme.colors.primary,
        }}
      >
        <Animated.View
          style={{
            transform: [
              {
                rotate: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "45deg"],
                }),
              },
            ],
          }}
        >
          <Feather name="plus" size={36} color="white" />
        </Animated.View>
      </Pressable>
      <Animated.View
        style={{
          position: "absolute",
          bottom: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "150%"],
          }),
          opacity: animatedValue,
          left: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "100%"],
          }),
          justifyContent: "center",
          alignItems: "center",
          width: 50,
          height: 50,
          borderRadius: 27,
          backgroundColor: colors["red-700"],
        }}
      >
        {isOpen && (
          <Pressable
            onPress={() => {
              handlePress();
              navigation.navigate("AddTransaction", { type: "expense" });
            }}
            style={{
              alignItems: "center",
            }}
          >
            <Feather name="arrow-up" size={12} color="white" />
            <MaterialCommunityIcons
              name="camera-metering-center"
              size={20}
              color="white"
            />
          </Pressable>
        )}
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          bottom: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "150%"],
          }),
          opacity: animatedValue,
          right: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "100%"],
          }),
          justifyContent: "center",
          alignItems: "center",
          width: 50,
          height: 50,
          borderRadius: 27,
          backgroundColor: colors["green-700"],
        }}
      >
        {isOpen && (
          <Pressable
            onPress={() => {
              handlePress();
              navigation.navigate("AddTransaction", { type: "income" });
            }}
            style={{
              alignItems: "center",
            }}
          >
            <Feather name="arrow-down" size={12} color="white" />
            <MaterialCommunityIcons
              name="camera-metering-center"
              size={20}
              color="white"
            />
          </Pressable>
        )}
      </Animated.View>
    </View>
  );
};

export default FloatingActionButton;
