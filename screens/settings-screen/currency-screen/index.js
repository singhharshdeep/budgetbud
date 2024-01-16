import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';

import theme, { typography } from '../../../theme'
import Header from '../../../components/header';

const CurrencyScreen = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('cad');

  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 16,
      backgroundColor: 'white'
    }}>
      <Header title="Currency" />
      <TouchableOpacity onPress={() => setSelectedCurrency('usd')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 32 }}>
          <Text style={[
            typography['text-lg']
          ]}>United States Dollar (USD)</Text>
          {selectedCurrency === 'usd' && <Ionicons name="checkmark-circle" size={24} color={theme.colors.primary} />}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedCurrency('cad')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 32 }}>
          <Text style={[
            typography['text-lg']
          ]}>Canadian Dollar (CAD)
          </Text>
          {selectedCurrency === 'cad' && <Ionicons name="checkmark-circle" size={24} color={theme.colors.primary} />}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default CurrencyScreen