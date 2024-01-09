import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo, Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

import theme, { colors, typography } from "../../theme";
import { useNavigation } from "@react-navigation/native";

const SettingsTabs = () => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: 'white',
      marginTop: 32,
      borderRadius: 20,
      paddingVertical: 16
    }}>
      <TouchableOpacity onPress={() => navigation.navigate("AccountSettings")}  style={{
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        borderBottomColor: colors["gray-200"]
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: colors["indigo-200"],
            padding: 16,
            borderRadius: 20
          }}>
            <Entypo name="wallet" size={36} color={theme.colors.primary} />
          </View>
          <Text style={[
            {
              marginLeft: 16
            },
            typography["text-lg"]
          ]}>Account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={{
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        borderBottomColor: colors["gray-200"]
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: colors["indigo-200"],
            padding: 16,
            borderRadius: 20
          }}>
            <Ionicons name="settings" size={36} color={theme.colors.primary} />
          </View>
          <Text style={[
            {
              marginLeft: 16
            },
            typography["text-lg"]
          ]}>Settings</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ExportData")} style={{
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        borderBottomColor: colors["gray-200"]
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: colors["indigo-200"],
            padding: 16,
            borderRadius: 20
          }}>
            <Feather name="share" size={36} color={theme.colors.primary} />
          </View>
          <Text style={[
            {
              marginLeft: 16
            },
            typography["text-lg"]
          ]}>Export Data</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{
        paddingLeft: 16,
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: colors["red-200"],
            padding: 16,
            borderRadius: 20
          }}>
            <MaterialIcons name="logout" size={36} color={colors["red-700"]} />
          </View>
          <Text style={[
            {
              marginLeft: 16
            },
            typography["text-lg"]
          ]}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SettingsTabs