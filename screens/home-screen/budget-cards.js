import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";

import { colors, typography } from "../../theme";
import { capitalize } from "../../util";

const Card = ({ type, value }) => (
  <View
    style={{
      flexDirection: "row",
      flexBasis: "49%",
      backgroundColor:
        type === "income" ? colors["green-700"] : colors["red-700"],
      borderRadius: 20,
      justifyContent: "center",
      padding: 8,
    }}
  >
    <View
      style={{
        alignSelf: "center",
        marginLeft: 16,
        height: 75,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: "white",
      }}
    >
      <Feather
        name="arrow-down"
        size={24}
        color={type === "income" ? colors["green-700"] : colors["red-700"]}
      />
      <MaterialCommunityIcons
        name="camera-metering-center"
        size={36}
        color={type === "income" ? colors["green-700"] : colors["red-700"]}
      />
    </View>
    <View style={{ padding: 16 }}>
      <Text style={[{ color: "white" }, typography["text-md"]]}>
        {capitalize(type)}
      </Text>
      <Text style={[{ color: "white" }, typography["text-2xl"]]}>${value}</Text>
    </View>
  </View>
);

const BudgetCards = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 16,
    }}
  >
    <Card type="income" value={5000} />
    <Card type="expenses" value={1200} />
  </View>
);

export default BudgetCards;
