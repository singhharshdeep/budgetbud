import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

import theme, { colors, typography } from '../../theme'

const FinancialReportButton = () => {
  return (
    <View style={{
      borderRadius: 10,
      marginTop: 16,
      backgroundColor: colors['indigo-200'],
    }}>
      <TouchableOpacity>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16,
          alignItems: 'center'
        }}>
          <Text style={[{
            color: theme.colors.primary
          }, typography['text-md']]}>See your financial report</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.colors.primary} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default FinancialReportButton