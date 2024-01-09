import { View, Text, TouchableHighlight, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

import theme, { colors, typography } from '../../theme'
import Header from './header';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      padding: 16
    }}>
      <Header title="Settings" />
      <TouchableOpacity onPress={() => navigation.navigate("Currency")} style={{ marginTop: 32 }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={[
            typography['text-lg']
          ]}>Currency</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Text style={[{
              color: colors['gray-400']
            },
              typography['text-lg']
            ]}>USD</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.colors.primary} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Theme")} style={{
        paddingTop: 24
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={[
            typography['text-lg']
          ]}>Theme</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Text style={[{
              color: colors['gray-400']
            },
              typography['text-lg']
            ]}>Light</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.colors.primary} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Security")} style={{
        paddingTop: 24
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={[
            typography['text-lg']
          ]}>Security</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Text style={[{
              color: colors['gray-400']
            },
              typography['text-lg']
            ]}>Fingerprint</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.colors.primary} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Notifications")} style={{
        paddingTop: 24
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={[
            typography['text-lg']
          ]}>Notification</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Text style={[
              typography['text-lg']
            ]}></Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.colors.primary} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SettingsScreen