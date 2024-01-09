import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';

import Header from '../header'
import theme, { typography } from '../../../theme'

const ThemeScreen = () => {
  const [selectedTheme, setSelectedTheme] = useState('light');

  return (
    <View style={{
      flex: 1,
      padding: 16,
      backgroundColor: 'white'
    }}>
      <Header title="Theme" />
      <TouchableOpacity onPress={() => setSelectedTheme('light')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 32 }}>
          <Text style={[
            typography['text-lg']
          ]}>Light</Text>
          {selectedTheme === 'light' && <Ionicons name="checkmark-circle" size={24} color={theme.colors.primary} />}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedTheme('dark')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 32 }}>
          <Text style={[
            typography['text-lg']
          ]}>Dark
          </Text>
          {selectedTheme === 'dark' && <Ionicons name="checkmark-circle" size={24} color={theme.colors.primary} />}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedTheme('device')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 32 }}>
          <Text style={[
            typography['text-lg']
          ]}>Use device theme
          </Text>
          {selectedTheme === 'device' && <Ionicons name="checkmark-circle" size={24} color={theme.colors.primary} />}
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ThemeScreen