import {
  View,
  Text,
} from "react-native";

import { colors, typography } from "../../theme";

const TransactionAccountOverview = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{
        marginTop: -30,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '85%',
        padding: 16,
        borderWidth: 1,
        borderColor: colors["gray-200"],
        borderRadius: 20,
      }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: colors["gray-500"] }}>Type</Text>
          <Text style={typography["text-lg"]}>Expense</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: colors["gray-500"] }}>Category</Text>
          <Text style={typography["text-lg"]}>Shopping</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: colors["gray-500"] }}>Account</Text>
          <Text style={typography["text-lg"]}>Scotiabank</Text>
        </View>
      </View>
    </View>
  )
}

export default TransactionAccountOverview