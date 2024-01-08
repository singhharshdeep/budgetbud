import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

import { typography } from "../../../theme";

const SuccessScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate("Dashboard"), 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image source={require("../../../assets/success.gif")} />
      <Text style={typography["text-2xl"]}>You are all set!</Text>
    </View>
  );
};

export default SuccessScreen;
