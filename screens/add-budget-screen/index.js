import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DetailEntry from '../../components/detail-entry'
import theme, { colors, typography } from '../../theme'
import Picker from '../../components/util/picker'
import { categories } from '../../mocks'
import AlertProgressInput from '../../components/alert-progress-input'

const AddBudgetScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [receiveAlerts, setReceiveAlerts] = useState(false);

  return (
    <DetailEntry
      title="Create Budget"
      balanceLabel="How much do you want to spend?"
      flexValue={4}
      backgroundColor={theme.colors.primary}
    >
      <Picker options={categories} placeholder='Category' />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        alignItems: 'center'
      }}>
        <View style={{ flexBasis: '70%' }}>
          <Text style={typography['text-lg']}>Alerts</Text>
          <Text style={{
            color: colors['gray-400']
          }}>Receive alerts whn budget reaches a percentage</Text>
        </View>
        <Switch
          ios_backgroundColor={colors["indigo-100"]}
          trackColor={{
            false: colors["indigo-400"],
            true: theme.colors.primary,
          }}
          value={receiveAlerts}
          onValueChange={setReceiveAlerts}
        />
      </View>
      {receiveAlerts && (
        <View style={{ marginTop: 24 }}>
          <AlertProgressInput />
        </View>
      )}
    </DetailEntry>
  )
}

export default AddBudgetScreen