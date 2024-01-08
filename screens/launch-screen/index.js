import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";

const LaunchScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate("Welcome"), 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>BudgetBud</Text>
    </SafeAreaView>
  );
};

export default LaunchScreen;
