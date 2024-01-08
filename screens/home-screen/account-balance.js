import { View, Text } from "react-native";

import { colors, typography } from "../../theme";

const AccountBalance = ({ balance }) => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <Text style={[{ color: colors["gray-400"] }, typography["text-lg"]]}>
      Account Balance
    </Text>
    <Text style={{ fontSize: 60 }}>$9400</Text>
  </View>
);

export default AccountBalance;
