import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import { typography } from '../../theme'
import Button from '../../components/util/button'

const ExportSuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: 'white',
      padding: 16
    }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={ typography['text-lg'] }>Check your email, we send you the financial report. In certain cases, it might take a little longer, depending on the time period and the volume of activity.</Text>
      </View>
      <Button primary title='Back to Home' onPress={() => navigation.navigate("Dashboard")} />
    </SafeAreaView>
  )
}

export default ExportSuccessScreen