import { View, Text, TouchableOpacity, FlatList } from "react-native";

import { transactions } from "../../mocks";
import theme, { colors, typography } from "../../theme";
import TransactionCard from "../../components/transaction-card";

const RecentTransactions = () => (
  <View style={{ flex: 1, marginTop: 16 }}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 16,
      }}
    >
      <Text style={typography["text-xl"]}>Recent Transactions</Text>
      <TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
            backgroundColor: colors["indigo-100"],
          }}
        >
          <Text style={{ color: theme.colors.primary }}>See all</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View>
      <FlatList
        data={transactions}
        contentContainerStyle={{
          marginBottom: 64,
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionCard item={item} />}
      />
    </View>
  </View>
);

export default RecentTransactions;
