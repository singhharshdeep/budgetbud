import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';

import theme, { typography } from '../../../theme'
import Header from '../../../components/header';

const SecurityScreen = () => {
  const [selectedSecurityType, setSelectedSecurityType] = useState('fingerprint');

  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 16,
      backgroundColor: 'white'
    }}>
      <Header title="Security" />
      <TouchableOpacity onPress={() => setSelectedSecurityType('fingerprint')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 32 }}>
          <Text style={[
            typography['text-lg']
          ]}>Fingerprint</Text>
          {selectedSecurityType === 'fingerprint' && <Ionicons name="checkmark-circle" size={24} color={theme.colors.primary} />}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedSecurityType('face-id')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 32 }}>
          <Text style={[
            typography['text-lg']
          ]}>Face ID
          </Text>
          {selectedSecurityType === 'face-id' && <Ionicons name="checkmark-circle" size={24} color={theme.colors.primary} />}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SecurityScreen