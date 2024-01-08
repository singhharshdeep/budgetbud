import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";

import theme, { colors } from "../../theme";

export default function Header() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 30,
          padding: 4,
          borderColor: theme.colors.primary,
        }}
      >
        <Image
          source={require("../../assets/favicon.png")}
          style={{
            height: 30,
            borderRadius: 30,
            width: 30,
          }}
        />
      </View>
      <TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            paddingHorizontal: 16,
            paddingVertical: 4,
            borderRadius: 20,
            borderColor: colors["gray-200"],
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={theme.colors.primary}
          />
          <Text>October</Text>
        </View>
      </TouchableOpacity>
      <View style={{ justifyContent: "center" }}>
        <FontAwesome name="bell" size={24} color={theme.colors.primary} />
      </View>
    </View>
  );
}
