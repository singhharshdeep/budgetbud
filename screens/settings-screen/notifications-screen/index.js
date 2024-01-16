import { View, Text, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

import theme, { colors, typography } from '../../../theme'
import Header from '../../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';

const NotificationsScreen = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    expenseAlert: true,
    budgetAlert: true
  });
  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 16,
      backgroundColor: 'white'
    }}>
      <Header title="Security" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 32 }}>
        <View style={{
          flexBasis: '70%'
        }}>
          <Text style={[
            typography['text-lg']
          ]}>Expense Alert
          </Text>
          <Text style={{ color: colors['gray-400'] }}>Get notification for your expenses</Text>
        </View>
        <Switch
          ios_backgroundColor={colors["indigo-100"]}
          trackColor={{
            false: colors["indigo-400"],
            true: theme.colors.primary,
          }}
          value={notificationSettings.expenseAlert}
          onValueChange={(expenseAlert) => setNotificationSettings({ ...notificationSettings, expenseAlert })}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 32 }}>
        <View style={{
          flexBasis: '70%'
        }}>
          <Text style={[
            typography['text-lg']
          ]}>Budget
          </Text>
          <Text style={{ color: colors['gray-400'] }}>Get notification when your budget exceeds the limit</Text>
        </View>
        <Switch
          ios_backgroundColor={colors["indigo-100"]}
          trackColor={{
            false: colors["indigo-400"],
            true: theme.colors.primary,
          }}
          value={notificationSettings.budgetAlert}
          onValueChange={(budgetAlert) => setNotificationSettings({ ...notificationSettings, budgetAlert })}
        />
      </View>
    </SafeAreaView>
  )
}

export default NotificationsScreen