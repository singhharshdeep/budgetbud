import { View, Text, TouchableOpacity } from "react-native";

import theme, { colors, typography } from "../../theme";
import { capitalize } from "../../util";
import { useNavigation } from "@react-navigation/native";

const TransactionCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail')}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 16,
          marginVertical: 8,
          borderRadius: 20,
          backgroundColor: colors["gray-100"],
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: item.color,
              padding: 16,
              borderRadius: 20,
            }}
          >
            {item.icon}
          </View>
          <View
            style={{ justifyContent: "space-around", marginLeft: 16 }}
          >
            <Text style={typography["text-xl"]}>
              {capitalize(item.category)}
            </Text>
            <Text style={{ color: colors["gray-500"] }}>
              {item.description.length >= 15
                ? item.description.slice(0, 14) + "..."
                : item.description}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={[
              {
                color:
                  item.type === "expense"
                    ? colors["red-700"]
                    : theme.colors.primary,
              },
              typography["text-lg"],
            ]}
          >
            {item.type === "expense" ? "-" : ""} ${item.value}
          </Text>
          <Text style={{ color: colors["gray-500"] }}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default TransactionCard