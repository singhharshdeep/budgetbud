import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from '@expo/vector-icons';

import theme, { colors, typography } from "../../theme";

const Header = () => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <View style={{
          borderWidth: 2,
          borderRadius: 50,
          padding: 8,
          borderColor: theme.colors.primary
        }}>
          <Image
            source={require('../../assets/favicon.png')}
            style={{
              height: 75,
              width: 75,
              borderRadius: 50
            }}
          />
        </View>
        <View style={{
          paddingLeft: 16
        }}>
          <Text style={{ color: colors["gray-400"] }}>Username</Text>
          <Text style={typography["text-xl"]}>Harshdeep Singh</Text>
        </View>
      </View>
      <View style={{
        borderWidth: 1,
        borderColor: colors["gray-200"],
        padding: 8,
        borderRadius: 10
      }}>
        <Feather name="edit-2" size={24} color="black" />
      </View>
    </View>
  )
}

export default Header