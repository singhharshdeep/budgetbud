import {
  View,
  Text,
} from "react-native";

import { colors, typography } from "../../theme";

const TransactionOverview = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 32 }}>
      <Text style={[{ color: 'white' }, typography["font-bold"], typography["text-6xl"]]}>$2000</Text>
      <Text style={[{ color: 'white', marginTop: 16 }, typography["text-xl"]]}>Groceries</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={[{ color: 'white' }, typography["text-lg"]]}>Saturday, June 3, 2023</Text>
        <Text style={[{ color: 'white', marginLeft: 16 }, typography["text-lg"]]}>16:33</Text>
      </View>
    </View>
  )
}

export default TransactionOverview