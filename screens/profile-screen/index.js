import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

import theme, { colors, typography } from "../../theme";
import Header from "./header";
import SettingsTabs from "./settings-tabs";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 16
    }}>
      <Header />
      <SettingsTabs />
    </SafeAreaView>
  );
};

export default ProfileScreen;
