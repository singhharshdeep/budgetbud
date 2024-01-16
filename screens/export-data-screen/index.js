import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Header from '../../components/header'
import Picker from '../../components/util/picker'
import { exportDateRange, exportFormat, exportTypes } from '../../mocks'
import Button from '../../components/util/button'
import { useNavigation } from '@react-navigation/native'


const ExportDataScreen = () => {
  const [selectedData, setSelectedData] = useState(exportTypes[0]);
  const [dateRange, setDateRange] = useState(exportDateRange[1]);
  const [format, setFormat] = useState(exportFormat[0]);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: 'white',
      padding: 16
    }}>
      <View style={{ flex: 1 }}>
        <Header title="Export Data" />
        <View style={{
          marginTop: 32
        }}>
          <View>
            <Text>What data do you want to export</Text>
            <Picker
              key='data'
              selectedValue={selectedData}
              onValueChange={setSelectedData}
              options={exportTypes}
              containerStyle={{ marginTop: 16 }} />
          </View>
          <View style={{
            marginTop: 16
          }}>
            <Text>What date range?</Text>
            <Picker
              key='date'
              selectedValue={dateRange}
              onValueChange={setDateRange}
              options={exportDateRange}
              containerStyle={{ marginTop: 16 }} />
          </View>
          <View style={{
            marginTop: 16
          }}>
            <Text>What format do you want to export?</Text>
            <Picker
              key='date'
              selectedValue={format}
              onValueChange={setFormat}
              options={exportFormat}
              containerStyle={{ marginTop: 16 }} />
          </View>
        </View>
      </View>
      <Button primary title='Export' onPress={() => navigation.navigate('ExportSuccess')} />
    </SafeAreaView>
  )
}

export default ExportDataScreen